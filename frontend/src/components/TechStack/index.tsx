import { Express, MongoDB, TailwindCSS, Solidjs, MySQL, Python } from "@/assets";
import { theme } from "@/config";

function TechStack() {
    return (
        <div class={`flex flex-row lg:justify-between md:justify-between gap-2 lg:gap-0 md:gap-0 justify-center flex-wrap p-10 bg-opacity-30 ${theme() ? "bg-white" : "bg-black"} `}>
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
    );
}

export default TechStack;
