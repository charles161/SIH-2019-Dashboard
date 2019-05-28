import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/sc404.css";

const hist = createBrowserHistory();
class NotFound extends React.Component {
    init = () => {
        window.setInterval(this.time, 66);
    };

    time = () => {
        var tim = new Date();
        var clockDiv = document.getElementById("clock");
        clockDiv.innerHTML =
            // tim.toLocaleTimeString() +
            // "." +
            // tim.getMilliseconds() +
            "404 Page Not Found";
    };
    componentWillMount() {
        this.init();
    }
    render() {
        return (
            <div class="c404">
                <div class="wrap">
                    <div id="clock" />
                </div>

                <div class="mail">
                    Thank you. Drop me an{" "}
                    <a
                        href="mailto:m.charles161@gmail.com?Subject=Hello%20again"
                        target="_top"
                    >
                        email
                    </a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Redirect exact from="/" to="/admin/dashboard" />
            <Route component={() => <NotFound />} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
