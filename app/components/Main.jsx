var 
    React       = require("react"),
    
    Navigation  = require("Navigation"),

    end_var_def = [];


var Main = (props) => {
    return(
        <div>
            <Navigation />
            <p>Main.jsx rendered</p>
            <div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
module.exports = Main;