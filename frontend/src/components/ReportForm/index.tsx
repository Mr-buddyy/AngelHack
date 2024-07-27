import { theme } from "@/config";

function Form() {
    return (
        <div class="flex flex-col">
            {" "}
            <div class="text-center title-section pb-[50px]">From Complement</div>{" "}
            <div id="reportForm" class={`relative flex flex-col justify-center h-screen overflow-hidden ${theme() ? "bg-white" : "bg-black"} bg-opacity-30 bg-blur`}>
                <div class="w-full m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <form class="space-y-4 py-[60px] px-[70px]">
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Name" class="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Content</span>
                            </label>
                            <textarea placeholder="Bio" class="w-full textarea input-primary" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Location</span>
                            </label>
                            <input type="Location" placeholder="Location" class="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Evidence</span>
                            </label>
                            <input type="file" class="file-input file-input-bordered w-full " />{" "}
                        </div>
                        <div class="">
                            <button class="btn btn-block button-primary">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
