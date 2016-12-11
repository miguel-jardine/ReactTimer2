var 
    React   = require("react"),

    end_var_def = [];

var Clock = React.createClass({

    getDefaultProps: function () {
        return {
            time: 0
        }
    },


    propTypes: {
        time: React.PropTypes.number
    },


    formatSeconds: function (seconds) {
        var minutes = seconds > 59 ? Math.floor(seconds / 60) : 0;
        seconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return `${minutes}:${seconds}`;
    },


    render: function () {
        var {time} = this.props;

        return (
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(time)}</span>
            </div>
        );
    }
});

module.exports = Clock;