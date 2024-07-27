import { Logo } from "@/assets";

function Footer() {
    return (
        <div class="bg-opacity-40 bg-white w-full">
            {" "}
            <footer class="footer align-items p-10 border-b">
                <nav>
                    <img src={Logo} alt="Logo" />
                </nav>
                <nav class="horizontal-align">
                    <h1 class="footer-title" style="margin: 0">
                        Ready to get started?
                    </h1>
                    <a href="/home#reportForm" class="btn btn-active button-primary">
                        Isi Formulir
                    </a>
                </nav>
            </footer>
            {/* <div class="w-full h-[1px] px-10 bg-black"></div> */}
            <footer class="footer p-10">
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
            <footer class="footer border-base-300  px-10 py-4">
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
