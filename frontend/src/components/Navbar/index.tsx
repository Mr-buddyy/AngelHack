import Solid from "@/assets/solid.svg";
import { Logo } from "@/assets";

function Navbar() {
    return (
        <nav class="px-[50px]">
            {" "}
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">
                        <img src={Logo} alt="" class="w-15 h-10" />
                    </a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#reportForm">Feature</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
