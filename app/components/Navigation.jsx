var 
    React                   = require("react"),
    {Link, IndexLink}       = require("react-router"),

    end_var_def = [];

// var Nav = React.createClass({
var Nav = () => {

    // render: function () {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" >Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active" >Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="https://github.com/miguel-jardine" target="_blank">Miguel Jardine</a></li>
                            
                    </ul>
                </div>
            </div>
        )
    // }
}
// });

module.exports = Nav;