var 
    React   = require("react"),

    Clock   = require("Clock"),

    end_var_def = [];

var Countdown = React.createClass({
    render: function () {
        return(
            <div>
                <Clock time={73} />
            </div>
        );
    }
});

module.exports = Countdown;