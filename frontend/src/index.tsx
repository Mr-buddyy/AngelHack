/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import Routes from "./routes/";

const root = document.getElementById("root");

render(() => <Routes />, root!);
