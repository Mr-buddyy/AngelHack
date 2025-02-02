import Solid from "@/assets/solid.svg";
import { createEffect, createSignal, onMount } from "solid-js";
import { theme } from "@/config";
import axios from "axios";
import { Footer, Navbar } from "@/components";

function Submissions() {
    const [submissions, setSubmissions] = createSignal([]);

    onMount(() => {
        const savedSubmissions = JSON.parse(localStorage.getItem("submissions") || "[]");
        setSubmissions(savedSubmissions);
    });

    const getBadgeColor = (status) => {
        switch (status) {
            case "resolved":
                return "bg-green-500";
            case "on progress":
                return "bg-yellow-500";
            case "pending":
            default:
                return "bg-gray-500";
        }
    };

    const [data, setData] = createSignal([]);
    createEffect(async () => {
        try {
            const response = await axios.get(`http://172.16.58.72:3001/api/list`);
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                setData([]); // Handle case where response data is not an array
            }
        } catch (error) {
            console.error("Error in GET request:", error);
            setData([]); // Handle error by setting data to an empty array
        }
    });

    return (
        <div>
            <Navbar />
            <div>
                <h1 class="text-center title-section pb-[50px]">Laporan</h1>
                <div class="container mx-auto px-4 mb-5">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        {data().map((data: any, index: any) => (
                            <div class={`${theme() ? "bg-white" : "bg-black"} bg-opacity-30 p-6 rounded-xl shadow`} key={index}>
                                <div class="flex justify-between items-center pb-5">
                                    <h2 class="text-xl font-bold">{data.title}</h2>
                                    <span class={`text-white text-sm px-2 py-1 rounded ${getBadgeColor(data.status)}`}>{data.status}</span>
                                </div>
                                <p>{data.description}</p>
                                <p>
                                    <strong>Location:</strong> {data.location}
                                </p>
                                <p>
                                    <strong>City:</strong> {data.city}
                                </p>{" "}
                                {data.image && <img src={data.image} alt="Submitted Evidence" class="w-64 h-64 object-contain mt-2" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            {/* Footer */}
        </div>
    );
}

export default Submissions;
