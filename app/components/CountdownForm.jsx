var 
    React   = require("react"),

    end_var_def = [];

var CountdownForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();

        var time = this.refs.time.value;
        this.refs.time.value = "";

        var validTime = /^\d*$/.test(time);
        if (validTime) this.props.onSetCountdown(parseInt(time, 10));
    },

    render: function () {
        return (
            <div className="countdown-form-container">
                <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form" >
                    <input type="text" ref="time" placeholder="Enter time in seconds" />
                    <button className="button" >Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;