var 
    React           = require("react"),

    Clock           = require("Clock"),
    CountdownForm   = require("CountdownForm"),

    end_var_def = [];

var Countdown = React.createClass({

    getInitialState: function () {
        return {
            time: 0
        }
    },


    handleSetCountdown: function (time) {
        this.setState({
            time: time
        });
    },


    render: function () {
        var {time} = this.state;

        return(
            <div id="countdown-container" >
                <div id="countdown-clock" >
                    <Clock time={time} />
                </div>
                <div id="countdown-controls" >
                    <CountdownForm onSetCountdown={this.handleSetCountdown} />
                </div>
            </div>
        );
    }
});

module.exports = Countdown;