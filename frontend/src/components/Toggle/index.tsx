import { createSignal, createEffect, onCleanup } from "solid-js";
//icon import
import { Sun, Moon } from "@/assets";

const ToggleTheme = () => {
    const [theme, setTheme] = createSignal(localStorage.getItem("theme") === "dark");

    const toggleTheme = () => {
        setTheme((prevTheme: any) => !prevTheme);
    };

    createEffect(() => {
        // Update the theme in GlobalSignal
        setTheme(theme());

        const htmlElement = document.querySelector("html");
        if (htmlElement) {
            htmlElement.setAttribute("data-theme", theme() ? "dark" : "light");
            htmlElement.style.color = theme() ? "white" : "black";
            htmlElement.style.backgroundColor = theme() ? "#13173a" : "#ffffff";

            onCleanup(() => {
                htmlElement.removeAttribute("data-theme");
            });
        }
        localStorage.setItem("theme", theme() ? "dark" : "light");
    });

    return (
        <div>
            <button class={`${theme() ? "bg-slate-700" : "bg-slate-200"} flex justify-center items-center p-2 w-8 h-8 rounded-full border border-solid  border-gray-300`} onClick={toggleTheme}>
                <div class="relative w-4 h-4">
                    <img class={`absolute inset-0 w-full h-full transition-opacity duration-300 ${theme() ? "opacity-100" : "opacity-0"}`} loading="lazy" src={Moon} />
                    <img class={`absolute inset-0 w-full h-full transition-opacity duration-300 ${theme() ? "opacity-0" : "opacity-100 "}`} loading="lazy" src={Sun} />
                </div>
            </button>
        </div>
    );
};

export default ToggleTheme;
