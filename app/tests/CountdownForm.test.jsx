var 
    React               = require("react"),
    ReactDOM            = require("react-dom"),
    $                   = require("jQuery"),
    expect              = require("expect"),
    TestUtils           = require("react-addons-test-utils"),

    CountdownForm       = require("CountdownForm"),

    end_var_def = [];


describe("CountdownForm", () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });

    it("should call onSetCountdown if valid seconds entered", () => {
        var
            spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $el = $(ReactDOM.findDOMNode(countdownForm)),
            value = 109,

            end_var_def = [];

        countdownForm.refs.time.value = value + "";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(value);
    });

    it("should not call onSetCountdown if invalid seconds entered", () => {
        var
            spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $el = $(ReactDOM.findDOMNode(countdownForm)),
            value = "109b",

            end_var_def = [];

        countdownForm.refs.time.value = value + "";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});
