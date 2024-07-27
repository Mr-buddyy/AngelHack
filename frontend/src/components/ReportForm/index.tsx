import { createSignal } from "solid-js";
import emailjs from "emailjs-com";

function Form() {
    const initialFormState = {
        title: "",
        description: "",
        location: "",
        latitude: "",
        longitude: "",
        city: "",
        image: "",
        status: "pending",
    };

    const [formData, setFormData] = createSignal(initialFormState);
    const [file, setFile] = createSignal(null);
    const [imagePreview, setImagePreview] = createSignal("");
    const [loadingLocation, setLoadingLocation] = createSignal(false);
    const [loading, setLoading] = createSignal(false);
    const [message, setMessage] = createSignal("");
    const [showChoiceModal, setShowChoiceModal] = createSignal(false);

    const cityEmailMapping = {
        Jakarta: "jakarta@gmail.com",
        Bandung: "bandung@gmail.com",
        // Add more cities and their respective emails here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setFormData((prevData) => ({
                ...prevData,
                image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const fetchLocation = (e) => {
        setLoadingLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                        .then((response) => response.json())
                        .then((data) => {
                            const location = data.display_name;
                            const city = data.address.city || data.address.town || data.address.village;

                            setFormData((prevData) => ({
                                ...prevData,
                                location,
                                city,
                            }));

                            setLoadingLocation(false);
                        })
                        .catch((error) => {
                            console.error("Error fetching location:", error);
                            alert("Unable to retrieve your location address. Please try again.");
                            setLoadingLocation(false);
                        });
                },
                (error) => {
                    console.error("Error getting geolocation: ", error);
                    alert("Unable to retrieve your location. Please enable location services and try again.");
                    setLoadingLocation(false);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
            setLoadingLocation(false);
        }
    };

    const getRandomStatus = () => {
        const statuses = ["resolved", "on progress", "pending"];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const sendEmail = (data) => {
        const cityEmail = cityEmailMapping[data.city];

        if (cityEmail) {
            const emailParams = {
                to_email: cityEmail,
                title: data.title,
                description: data.description,
                location: data.location,
                image: data.image,
                status: data.status,
            };

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams, "YOUR_USER_ID").then(
                (response) => {
                    console.log("Email sent successfully:", response.status, response.text);
                },
                (error) => {
                    console.error("Failed to send email:", error);
                }
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            fetchLocation();

            const randomizedStatus = getRandomStatus();
            const updatedFormData = { ...formData(), status: randomizedStatus };

            const submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
            submissions.push(updatedFormData);
            localStorage.setItem("submissions", JSON.stringify(submissions));

            sendEmail(updatedFormData); // Send email after saving data

            // Reset form state
            setFormData(initialFormState);
            setImagePreview("");
            setLoading(false);
            setFile(null);
            setMessage("Form submitted successfully!");

            setTimeout(() => {
                setMessage("");
            }, 3000);
        }, 1000); // Simulate delay for demo purposes
    };

    return (
        <div id="reportForm" class="flex flex-col">
            <div class="text-center title-section pb-[50px]">From Complement</div>
            <div class="relative flex flex-col justify-center h-screen overflow-hidden bg-white bg-opacity-30 bg-blur">
                <div class="w-full m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <form class="space-y-4 py-[60px] px-[70px]" method="POST" onSubmit={handleSubmit}>
                        {message() && <div class="alert alert-success">{message()}</div>}
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Judul</span>
                            </label>
                            <input type="text" name="title" placeholder="Judul" value={formData().title} onChange={handleInputChange} class="w-full input input-bordered input-primary" required />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Keterangan</span>
                            </label>
                            <textarea name="description" placeholder="Keterangan" value={formData().description} onChange={handleInputChange} class="w-full textarea input-primary" required />
                        </div>
                        <div class="w-full">
                            <label class="label">
                                <span class="text-base label-text">Lokasi</span>
                            </label>
                            <div class="relative flex items-center">
                                <input type="text" name="location" placeholder="Location" value={formData().location} onChange={handleInputChange} class="w-full input input-bordered input-primary" disabled />
                                {loadingLocation() && (
                                    <div class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                                        <div class="loader"></div>
                                    </div>
                                )}
                                <button type="button" class="btn btn-primary ml-2" onClick={fetchLocation}>
                                    ↻
                                </button>
                            </div>
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Bukti</span>
                            </label>
                            <div class="flex space-x-2">
                                <button type="button" class="btn btn-secondary" onClick={() => setShowChoiceModal(true)}>
                                    Choose
                                </button>
                                {imagePreview() && (
                                    <div class="mt-4 w-64 h-64 overflow-auto border">
                                        <img src={imagePreview()} alt="Image Preview" class="w-full h-full object-contain" />
                                    </div>
                                )}
                            </div>
                            {showChoiceModal() && (
                                <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div class="bg-white p-4 rounded shadow-lg">
                                        <h3 class="text-lg font-semibold mb-2">Select Option</h3>
                                        <button type="button" class="btn btn-primary w-full mb-2" onClick={() => document.getElementById("cameraInput").click()}>
                                            Take a Picture
                                        </button>
                                        <input id="cameraInput" type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={handleFileChange} />
                                        <input type="file" class="file-input file-input-bordered w-full" onChange={handleFileChange} />
                                        <button type="button" class="btn btn-outline w-full mt-2" onClick={() => setShowChoiceModal(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}
                            {loading() && (
                                <div class="flex items-center justify-center mt-4">
                                    <div class="loader"></div>
                                    <span class="ml-2"></span>
                                </div>
                            )}
                        </div>
                        <div class="">
                            <button type="submit" class="btn btn-block button-primary">
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
