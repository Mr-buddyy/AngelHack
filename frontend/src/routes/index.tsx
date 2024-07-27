import { Router, Route } from "@solidjs/router";
import App from "../App";
import Home from "@/pages/Home";

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={App} />
            <Route path="/Home" component={Home} />
        </Router>
    );
};

export default Routes;
