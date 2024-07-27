// import Solid from "@/assets/solid.svg";
import Toggle from "../Toggle";

function Navbar() {
    return (
        <nav class="px-[50px]">
            {" "}
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <a>
                                <Toggle />
                            </a>
                        </li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul class="bg-base-100 rounded-t-none p-2">
                                    <li>
                                        <a>About</a>
                                    </li>
                                    <li>
                                        <a>Features</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
