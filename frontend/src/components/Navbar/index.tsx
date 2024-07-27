// import Solid from "@/assets/solid.svg";
import Toggle from "../Toggle";
import { Logo } from "@/assets";

function Navbar() {
    return (
        <nav class="px-0 sm:px-[50px]">
            {" "}
            <div class="navbar">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">
                        <img src={Logo} alt="" class="w-15 h-10" />
                    </a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1 items-center">
                        <li class="hidden sm:flex">
                            <a href="#about">About</a>
                        </li>
                        <li class="hidden sm:flex">
                            <a href="#reportForm">Feature</a>
                        </li>
                        <li class="hidden sm:flex">
                            <a href="#faq">FAQ</a>
                        </li>{" "}
                        <li>
                            {" "}
                            <a>
                                <Toggle />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
