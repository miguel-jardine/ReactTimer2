var 
    React       = require("react"),
    ReactDOM    = require("react-dom"),

    {Route, Router, IndexRoute, hashHistory}    = require("react-router"),

    Main        = require("Main"),
    Timer       = require("Timer"),
    Countdown   = require("Countdown"),
    

    end_var_def = [];

// Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Timer} />
            <Route path="countdown" component={Countdown} />
        </Route>
    </Router>,
    document.getElementById("app")
);
