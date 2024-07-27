import { Express, MongoDB, TailwindCSS, Solidjs, MySQL, Python } from "@/assets";
function TechStack() {
    return (
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
    );
}

export default TechStack;
