import Solid from "@/assets/solid.svg";

import { About, Hero, TechStack, FAQ, Footer, Navbar, ReportForm } from "@/components";

function Home() {
    return (
        <div>
            <Navbar />
            {/* hero */}
            <Hero />
            {/* <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse gap-20 justify-between">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">
                            Mudah, Transparant, <br /> and Aman
                        </h1>
                        <p class="py-6">Adukan keluhan anda dengan anonimus dan rahasia</p>
                        <div class="flex flex-row gap-2">
                            {" "}
                            <a href="#about" class="btn button-primary">
                                About
                            </a>
                            <a href="#reportForm" class="btn button-primary">
                                Feature
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* techstack */}
            <TechStack />
            {/* About */}
            <About />
            {/* Form */}
            <ReportForm />
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
