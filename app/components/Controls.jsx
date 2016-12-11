var 
    React   = require("react"),

    end_var_def = [];

var Controls = React.createClass({
    render: function () {
        return(
            <div>
                <button className="button">Start</button>
                <button className="button hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;