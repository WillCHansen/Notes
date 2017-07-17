import React from 'react';
import ReactDOM from "react-dom";

import Test from "./test";

class App extends React.Component {
    render() {
        return (
            <div>
                < Test />
            </div>
        );
    }
}

ReactDOM.render(< App />, document.getElementById("app"));