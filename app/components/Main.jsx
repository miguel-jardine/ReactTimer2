var 
    React       = require("react"),
    
    Navigation  = require("Navigation"),

    end_var_def = [];


var Main = (props) => {
    return(
        <div>
            <Navigation />
            <div className="row" >
                <div className="column small-centered medium-6" >
                    {props.children}
                </div>
            </div>
        </div>
    )
}
module.exports = Main;