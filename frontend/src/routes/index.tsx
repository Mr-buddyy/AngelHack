import { Router, Route } from "@solidjs/router";
import App from "../App";
import Home from "@/pages/Home";
import Submissions from "@/pages/Submissions";

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={App} />
            <Route path="/Home" component={Home} />
            <Route path="/Submissions" component={Submissions} />
        </Router>
    );
};

export default Routes;
