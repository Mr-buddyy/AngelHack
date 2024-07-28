import { createSignal } from "solid-js";
import axios from "axios";
import { theme } from "@/config";
import { useNavigate } from "@solidjs/router";

import Webcam from "react-webcam";
// import emailjs from "emailjs-com";

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

    const [formData, setFormData] = createSignal({ title: "", description: "", location: "", latitude: "", longitude: "", city: "", image: "", status: "pending" });
    const [file, setFile] = createSignal(null);
    const [imagePreview, setImagePreview] = createSignal("");
    const [loadingLocation, setLoadingLocation] = createSignal(false);
    const [loading, setLoading] = createSignal(false);
    const [message, setMessage] = createSignal("");
    const [showChoiceModal, setShowChoiceModal] = createSignal(false);

    const url = "http://172.16.58.72:3001/api";
    const [showWebcam, setShowWebcam] = createSignal(false);

    let videoRef;
    let canvasRef;

    const method = ["submit", "list", "send-email"];
    const navigate = useNavigate();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData().location, "isi location");
        console.log(formData(), "isi from datane");
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setFormData((prevData: any) => ({
                ...prevData,
                image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const fetchLocation = () => {
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

                            setFormData((prevData: any) => ({
                                ...prevData,
                                location,
                                city,
                                latitude,
                                longitude,
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

    const handleSubmit = async (e: any) => {
        try {
            const response = await axios.post(`${url}/${method[0]}`, formData());
            const sendEmail = await axios.post(`${url}/${method[2]}`, formData().location);
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
                fetchLocation();

                const randomizedStatus = getRandomStatus();
                const updatedFormData = { ...formData(), status: randomizedStatus };

                const submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
                submissions.push(updatedFormData);
                localStorage.setItem("submissions", JSON.stringify(submissions));

                // sendEmail(updatedFormData); // Send email after saving data

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
            return response.data, sendEmail.data;
            navigate(-1);
        } catch (error) {
            console.error("Error in POST request:", error);
            return {};
        }
    };

    const startWebcam = () => {
        setShowWebcam(true);
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                videoRef.srcObject = stream;
                videoRef.play();
            })
            .catch((error) => {
                console.error("Error accessing webcam: ", error);
            });
    };

    const capture = () => {
        const context = canvasRef.getContext("2d");
        context.drawImage(videoRef, 0, 0, canvasRef.width, canvasRef.height);
        const imageSrc = canvasRef.toDataURL("image/jpeg");
        setImagePreview(imageSrc);
        setFormData((prevData) => ({
            ...prevData,
            image: imageSrc,
        }));
        setShowWebcam(false);
        const stream = videoRef.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });

        videoRef.srcObject = null;
    };

    return (
        <div class="flex flex-col">
            <div class="text-center title-section pb-[50px]">From Complement</div>
            <div id="reportForm" class={`relative flex flex-col justify-center h-screen overflow-hidden ${theme() ? "bg-white" : "bg-black"} bg-opacity-30 bg-blur`}>
                <div class={`w-full  ${theme() ? "bg-[#13173a]" : "bg-white"} m-auto rounded-md shadow-md lg:max-w-xl`}>
                    <form class="space-y-4 py-[60px] px-[70px]" method="POST" onSubmit={handleSubmit}>
                        {message() && <div class="alert alert-success">{message()}</div>}
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Judul</span>
                            </label>
                            <input type="text" name="title" placeholder="Judul" value={formData().title} onChange={handleInputChange} class="w-full input input-bordered bg-transparent" required />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Keterangan</span>
                            </label>
                            <textarea name="description" placeholder="Keterangan" value={formData().description} onChange={handleInputChange} class="w-full textarea textarea-bordered  bg-transparent" required />
                        </div>
                        <div class="w-full">
                            <label class="label">
                                <span class="text-base label-text">Lokasi</span>
                            </label>
                            <div class="relative flex items-center">
                                <input type="text" name="location" placeholder="Location" value={formData().location} onChange={handleInputChange} class="w-full input input-bordered  bg-transparent" disabled />
                                {loadingLocation() && (
                                    <div class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                                        <div class="loader"></div>
                                    </div>
                                )}
                                <button type="button" class="btn button-primary ml-2" onClick={fetchLocation}>
                                    ↻
                                </button>
                            </div>
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Bukti</span>
                            </label>
                            <div class="flex space-x-2">
                                <button type="button" class="btn button-primary" onClick={() => setShowChoiceModal(true)}>
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
                                        <button type="button" class="btn btn-primary w-full mb-2" onClick={startWebcam}>
                                            Take a Picture
                                        </button>
                                        {showWebcam() && (
                                            <div class="flex flex-col items-center">
                                                <video ref={(el) => (videoRef = el)} class="w-full" playsInline></video>
                                                <canvas ref={(el) => (canvasRef = el)} class="hidden" width="640" height="480"></canvas>
                                                <button type="button" class="btn btn-primary mt-2" onClick={capture}>
                                                    Capture
                                                </button>
                                            </div>
                                        )}
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
