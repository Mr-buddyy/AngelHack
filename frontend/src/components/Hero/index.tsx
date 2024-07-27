function Hero() {
    return (
        <div class="">
            <div class="flex flex-col lg:flex-row gap-20 justify-between items-center flex-wrap py-[70px] px-[100px]">
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
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" class="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    );
}

export default Hero;
