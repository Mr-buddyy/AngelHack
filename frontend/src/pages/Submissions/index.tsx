import Solid from "@/assets/solid.svg";
import { createSignal, onMount } from "solid-js";

import { Footer, Navbar } from "@/components";

function Submissions() {
    const [submissions, setSubmissions] = createSignal([]);

    onMount(() => {
        const savedSubmissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        setSubmissions(savedSubmissions);
    });

    const getBadgeColor = (status) => {
        switch (status) {
            case 'resolved':
                return 'bg-green-500';
            case 'on progress':
                return 'bg-yellow-500';
            case 'pending':
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <h1 class="text-center title-section pb-[50px]">Laporan</h1>
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 gap-4">
                        {submissions().map((submission, index) => (
                            <div class="bg-white p-4 rounded shadow" key={index}>
                                <div class="flex justify-between items-center">
                                    <h2 class="text-xl font-bold">{submission.title}</h2>
                                    <span class={`text-white text-sm px-2 py-1 rounded ${getBadgeColor(submission.status)}`}>
                                        {submission.status}
                                    </span>
                                </div>
                                <p>{submission.description}</p>
                                <p><strong>Location:</strong> {submission.location}</p>
                                <p><strong>City:</strong> {submission.city}</p> {/* Display city */}
                                {submission.image && (
                                    <img src={submission.image} alt="Submitted Evidence" class="w-64 h-64 object-contain mt-2" />
                                )}
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
