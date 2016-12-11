var 
    React       = require("react"),

    Clock       = require("Clock"),
    Controls    = require("Controls"),

    end_var_def = [];

var Timer = React.createClass({
    render: function () {
        return(
            <div>
                <Clock />
                <Controls />
            </div>
        );
    }
});

module.exports = Timer;