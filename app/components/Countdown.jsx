var 
    React           = require("react"),

    Clock           = require("Clock"),
    CountdownForm   = require("CountdownForm"),

    end_var_def = [];

var Countdown = React.createClass({

    getInitialState: function () {
        return {
            time: 0, 
            countdownStatus: "stopped"
        }
    },


    handleSetCountdown: function (time) {
        this.setState({
            time: time,
            countdownStatus: "started"
        });
    },


    componentDidUpdate: function (prevProps, prevState) {
        // console.warn("called", this.state.time);
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
            }
        }
    },


    startTimer: function () {
        this.timer = setInterval(() => {
            var counter = this.state.time - 1;
            if (counter < 0) this.stopTimer();
            this.setState({
                time: counter >= 0 ? counter : 0
            })
        }, 1000);
    },


    stopTimer: function () {
        clearInterval(this.timer);
        this.setState({
            countdownStatus: "stopped"
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