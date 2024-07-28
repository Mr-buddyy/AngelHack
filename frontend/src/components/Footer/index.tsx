import { Logo } from "@/assets";
import { theme } from "@/config";

function Footer() {
    return (
        <div class={`bg-opacity-40 ${theme() ? "bg-white" : "bg-black text-white"} w-full px-[100px]`}>
            {" "}
            <footer class="footer align-items py-10 border-b">
                <nav>
                    <img src={Logo} alt="Logo" />
                </nav>
                <nav class="horizontal-align">
                    <h1 class="footer-title" style="margin: 0">
                        Ready to get started?
                    </h1>
                    <a href="/home#reportForm" class="btn button-primary">
                        Isi Formulir
                    </a>
                </nav>
            </footer>
            {/* <div class="w-full h-[1px] px-10 bg-black"></div> */}
            <footer class="footer py-10">
                <nav>
                    <h6 class="footer-title">Quick Link</h6>
                    <a href="/home#about" class="link link-hover">
                        About
                    </a>
                    <a href="/home#reportForm" class="link link-hover">
                        Features
                    </a>
                </nav>
                <nav>
                    <h6 class="footer-title">Help</h6>
                    <a href="/home#faq" class="link link-hover">
                        FAQ
                    </a>
                </nav>
            </footer>
            <footer class="footer border-base-300  py-10">
                <aside class="grid-flow-col items-center">
                    <p>© 2024 Satria IT. All rights reserved.</p>
                </aside>
                <nav class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4">
                        <a class="link link-hover">Terms & Conditions</a>
                        <a class="link link-hover">Privacy Policy</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
