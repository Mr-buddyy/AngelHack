import Solid from "@/assets/solid.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Express, MongoDB, TailwindCSS, Solidjs, MySQL, Python } from "@/assets";

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
                            <button class="btn button-primary">About</button>
                            <button class="btn button-primary">Get Started</button>
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
                <div class="carousel-item">
                    <img src={Express} alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src={MongoDB} alt="Pizza" />
                </div>
            </div>
            {/* About */}
            <div class="flex flex-col gap-50 px-[100px]">
                <div class="flex flex-col gap-4">
                    <p class="title-section">Tentang Kami</p>
                    <p class="text-desc">
                        Nihaw Platfrom adalah platform pengaduan yang dapat di ajukan oleh siapa saja dengan tanpa harus menyertakan identitas. Seluruh masyarakat dapat mengadukan keluhan secara bebas tanpa takut identitasnya ketahuan.
                    </p>
                </div>
                <div class="flex flex-row py-10 items-center justify-between gap-5">
                    <div class="card image-full w-[32vw] bg-gradient-to-br from-[#a84be1] via-[#a486b7] to-[#9d00fd] rounded-2xl">
                        <div class="card-body">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.982 2.86C13.348 1.22 15.105 0 17.5 0C17.7652 0 18.0196 0.105357 18.2071 0.292893C18.3946 0.48043 18.5 0.734784 18.5 1C18.5 1.26522 18.3946 1.51957 18.2071 1.70711C18.0196 1.89464 17.7652 2 17.5 2C15.895 2 14.652 2.78 13.518 4.14C12.358 5.533 11.408 7.419 10.394 9.447L10.363 9.511C9.386 11.464 8.343 13.551 7.018 15.141C5.652 16.78 3.895 18 1.5 18C1.23478 18 0.98043 17.8946 0.792893 17.7071C0.605357 17.5196 0.5 17.2652 0.5 17C0.5 16.7348 0.605357 16.4804 0.792893 16.2929C0.98043 16.1054 1.23478 16 1.5 16C3.105 16 4.348 15.22 5.482 13.86C6.642 12.467 7.592 10.581 8.606 8.553L8.637 8.489C9.614 6.536 10.657 4.45 11.982 2.86Z"
                                    fill="white"
                                />
                            </svg>

                            <h2 class="card-title text-3xl">Mudah Digunakan</h2>
                            <p class="text-justify">
                                Dengan desain yang simpel, platform Nihaw menawarkan antarmuka intuitif, aksesibilitas tinggi, fitur lengkap, keamanan terjamin, dukungan pelanggan responsif, kustomisasi, dan kinerja cepat untuk berbagai
                                kalangan pengguna.
                            </p>
                        </div>
                    </div>
                    <div class="card image-full w-[32vw] bg-gradient-to-bl from-[#2fd0ee] via-[#80b6c0] to-[#1a7688] rounded-2xl">
                        <div class="card-body ">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.982 2.86C13.348 1.22 15.105 0 17.5 0C17.7652 0 18.0196 0.105357 18.2071 0.292893C18.3946 0.48043 18.5 0.734784 18.5 1C18.5 1.26522 18.3946 1.51957 18.2071 1.70711C18.0196 1.89464 17.7652 2 17.5 2C15.895 2 14.652 2.78 13.518 4.14C12.358 5.533 11.408 7.419 10.394 9.447L10.363 9.511C9.386 11.464 8.343 13.551 7.018 15.141C5.652 16.78 3.895 18 1.5 18C1.23478 18 0.98043 17.8946 0.792893 17.7071C0.605357 17.5196 0.5 17.2652 0.5 17C0.5 16.7348 0.605357 16.4804 0.792893 16.2929C0.98043 16.1054 1.23478 16 1.5 16C3.105 16 4.348 15.22 5.482 13.86C6.642 12.467 7.592 10.581 8.606 8.553L8.637 8.489C9.614 6.536 10.657 4.45 11.982 2.86Z"
                                    fill="white"
                                />
                            </svg>

                            <h2 class="card-title">Mudah Digunakan</h2>
                            <p class="text-justify">
                                Dengan desain yang simpel, platform Nihaw menawarkan antarmuka intuitif, aksesibilitas tinggi, fitur lengkap, keamanan terjamin, dukungan pelanggan responsif, kustomisasi, dan kinerja cepat untuk berbagai
                                kalangan pengguna.
                            </p>
                        </div>
                    </div>
                    <div class="card image-full w-[32vw] bg-gradient-to-br from-[#555aca] via-[#6366ae] to-[#2a2c64] rounded-2xl">
                        <div class="card-body ">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.982 2.86C13.348 1.22 15.105 0 17.5 0C17.7652 0 18.0196 0.105357 18.2071 0.292893C18.3946 0.48043 18.5 0.734784 18.5 1C18.5 1.26522 18.3946 1.51957 18.2071 1.70711C18.0196 1.89464 17.7652 2 17.5 2C15.895 2 14.652 2.78 13.518 4.14C12.358 5.533 11.408 7.419 10.394 9.447L10.363 9.511C9.386 11.464 8.343 13.551 7.018 15.141C5.652 16.78 3.895 18 1.5 18C1.23478 18 0.98043 17.8946 0.792893 17.7071C0.605357 17.5196 0.5 17.2652 0.5 17C0.5 16.7348 0.605357 16.4804 0.792893 16.2929C0.98043 16.1054 1.23478 16 1.5 16C3.105 16 4.348 15.22 5.482 13.86C6.642 12.467 7.592 10.581 8.606 8.553L8.637 8.489C9.614 6.536 10.657 4.45 11.982 2.86Z"
                                    fill="white"
                                />
                            </svg>

                            <h2 class="card-title">Mudah Digunakan</h2>
                            <p class="text-justify">
                                Dengan desain yang simpel, platform Nihaw menawarkan antarmuka intuitif, aksesibilitas tinggi, fitur lengkap, keamanan terjamin, dukungan pelanggan responsif, kustomisasi, dan kinerja cepat untuk berbagai
                                kalangan pengguna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div class="flex flex-col">
                {" "}
                <div class="text-center title-section pb-[50px]">From Complement</div>{" "}
                <div class="relative flex flex-col justify-center h-screen overflow-hidden bg-white bg-opacity-30 bg-blur">
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

            {/* end form */}
            {/* FAQ */}
            <div class="join join-vertical w-full">
                <div class="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div class="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div class="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div class="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            {/* end FAQ */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
    );
}

export default Home;
