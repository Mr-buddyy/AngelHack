import Solid from "@/assets/solid.svg";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { TailwindCSS, Solidjs, MySQL, Python } from "@/assets";

function Home() {
    return (
        <div>
            <Navbar />
            {/* hero */}
            <div class="hero bg-base-200 min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">
                            Mudah, Transparant, <br /> and Aman
                        </h1>
                        <p class="py-6">Adukan keluhan anda dengan anonimus dan rahasia</p>
                        <div class="flex flex-row gap-2">
                            {" "}
                            <a href="#about" class="btn btn-primary">About</a>
                            <a href="#reportForm" class="btn btn-primary">Feature</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* techstack */}
            <div class="flex flex-row justify-between p-10 bg-black">
                <div class="carousel-item">
                    <img src={TailwindCSS} alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src={Solidjs} alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src={MySQL} alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src={Python} alt="Pizza" />
                </div>
            </div>
            {/* About */}
            <div id="about" class="flex flex-row p-10 items-center justify-between">
                {" "}
                <div class="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div id="reportForm" class="relative flex flex-col justify-center h-screen overflow-hidden">
                <div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 class="text-3xl font-semibold text-center text-purple-700">DaisyUI</h1>
                    <form class="space-y-4">
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email Address" class="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" class="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="text-base label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" class="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <button class="btn btn-block btn-primary">Sign Up</button>
                        </div>
                        <span>
                            Already have an account ?
                            <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline">
                                Login
                            </a>
                        </span>
                    </form>
                </div>
            </div>
            {/* end form */}
            {/* FAQ */}
            <FAQ />
            {/* end FAQ */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
    );
}

export default Home;
