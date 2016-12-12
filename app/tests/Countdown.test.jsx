var 
    React               = require("react"),
    ReactDOM            = require("react-dom"),
    $                   = require("jQuery"),
    expect              = require("expect"),
    TestUtils           = require("react-addons-test-utils"),

    Countdown           = require("Countdown"),

    end_var_def = [];


describe("Countdown", () => {
    it("should exist", () => {
        expect(Countdown).toExist();
    });

    describe("handleSetCountdown", () => {
        it("should set state to started and begin counting down", (done) => {
            var
                countdown = TestUtils.renderIntoDocument(<Countdown/>),

                end_var_def = [];

                countdown.handleSetCountdown(10);

                expect(countdown.state.time).toBe(10);
                expect(countdown.state.countdownStatus).toBe("started");

                setTimeout(function() {
                    expect(countdown.state.time).toBe(9);
                    done();
                }, 1001);
        });


        it("should not have time less than zero", (done) => {
            var
                countdown = TestUtils.renderIntoDocument(<Countdown/>),

                end_var_def = [];

                countdown.handleSetCountdown(1);

                setTimeout(function() {
                    expect(countdown.state.time).toBe(0);
                    done();
                }, 3001);
        });
    });


    // it("should not call onSetCountdown if invalid seconds entered", () => {
    //     var
    //         spy = expect.createSpy(),
    //         Countdown = TestUtils.renderIntoDocument(<Countdown onSetCountdown={spy}/>),
    //         $el = $(ReactDOM.findDOMNode(Countdown)),
    //         value = "109b",

    //         end_var_def = [];

    //         Countdown.refs.time.value = value + "";
    //         TestUtils.Simulate.submit($el.find("form")[0]);

    //         expect(spy).toNotHaveBeenCalled();
    // });

});
