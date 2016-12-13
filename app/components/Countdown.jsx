var 
    React           = require("react"),

    Clock           = require("Clock"),
    CountdownForm   = require("CountdownForm"),
    Controls        = require("Controls"),
    

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
                case "stopped":
                    this.setState({
                        time: 0
                    });
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },


    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    

    startTimer: function () {
        this.timer = setInterval(() => {
            var counter = this.state.time - 1;
            if (counter === 0) this.stopTimer();
            this.setState({
                time: counter >= 0 ? counter : 0
            })
        }, 1000);
    },


    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });  
    },


    stopTimer: function () {
        clearInterval(this.timer);
        this.setState({
            countdownStatus: "stopped"
        });
    },


    render: function () {
        var {time, countdownStatus} = this.state;

        var renderControls = () => {
            if (countdownStatus === "started")
                return (
                    <div>
                        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
                    </div>
                );
            else
                return(
                    <div className="countdown-controls" >
                        <CountdownForm onSetCountdown={this.handleSetCountdown} />
                    </div>
                );
        };

        return(
            <div id="countdown-container" >
                <div id="countdown-clock" >
                    <Clock time={time} />
                </div>
                {renderControls()}
            </div>
        );
    }
});

module.exports = Countdown;