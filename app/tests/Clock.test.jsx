var 
    React   = require("react"),
    ReactDOM    = require("react-dom"),
    $           = require("jQuery"),
    expect      = require("expect"),
    TestUtils   = require("react-addons-test-utils"),

    Clock       = require("Clock"),

    end_var_def = [];


describe("Clock", () => {
    it("should exist", () => {
        expect(Clock).toExist();
    });

    describe("render", () => {
        it("should render clock to output", () => {
            var
                clock = TestUtils.renderIntoDocument(<Clock time={10}/>),
                $el = $(ReactDOM.findDOMNode(clock)),
                actualText = $el.find(".clock-text").text(),

                end_var_def = [];

            expect(actualText).toBe("00:10");
            
        })
    });

    describe("formatSeconds", () => {
        it("should format seconds", () => {
            var
                clock = TestUtils.renderIntoDocument(<Clock time={10}/>),
                seconds = 615,
                expected = "10:15",
                actual = clock.formatSeconds(seconds),

                end_var_def = [];

            expect(actual).toBe(expected);
        });

        it("should format seconds when min/sec < 10", () => {
            var
                clock = TestUtils.renderIntoDocument(<Clock time={10}/>),
                seconds = 61,
                expected = "01:01",
                actual = clock.formatSeconds(seconds),

                end_var_def = [];

            expect(actual).toBe(expected);
        });

    })
});
