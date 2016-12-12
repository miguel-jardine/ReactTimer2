var 
    React               = require("react"),
    ReactDOM            = require("react-dom"),
    $                   = require("jQuery"),
    expect              = require("expect"),
    TestUtils           = require("react-addons-test-utils"),

    Controls            = require("Controls"),

    end_var_def = [];


describe("Controls", () => {
    it("should exist", () => {
        expect(Controls).toExist();
    });

    it("should render pause button when started", () => {
        var
            controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />),
            $el = $(ReactDOM.findDOMNode(controls)),
            $pauseButton = $el.find("button:contains(Pause)"),

            end_var_def = [];

            expect($pauseButton.length).toBe(1);
    });

    it("should render start button when paused", () => {
        var
            controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />),
            $el = $(ReactDOM.findDOMNode(controls)),
            $stopButton = $el.find("button:contains(Stop)"),

            end_var_def = [];

            expect($stopButton.length).toBe(1);
    });
});
