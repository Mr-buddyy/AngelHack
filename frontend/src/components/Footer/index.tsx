import { Logo } from "@/assets";

function Footer() {
    return (
        <div>
            {" "}
            <footer class="footer bg-base-200 text-base-content align-items p-10">
                <nav>
                    <img src={Logo} alt="Logo" />
                </nav>
                <nav class="horizontal-align">
                    <h1 class="footer-title" style="margin: 0">Ready to get started?</h1>
                    <button class="btn btn-active btn-primary">Isi Formulir</button>
                </nav>
            </footer>
            <div class="divider-horizontal"></div>
            <footer class="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 class="footer-title">Quick Link</h6>
                    <a class="link link-hover">About</a>
                    <a class="link link-hover">Features</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Help</h6>
                    <a class="link link-hover">FAQ</a>
                </nav>
            </footer>
            <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
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
