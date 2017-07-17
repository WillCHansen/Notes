import React from 'react';
import ReactDOM from "react-dom";

import Quill from "./Quill";

class App extends React.Component {
    render() {
        return (
            <div>
                < Quill />
            </div>
        );
    }
}

ReactDOM.render(< App />, document.getElementById("app"));