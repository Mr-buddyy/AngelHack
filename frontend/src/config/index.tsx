import { createSignal } from "solid-js";

export const [theme, setTheme] = createSignal(localStorage.getItem("theme") === "dark");
