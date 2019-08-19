import React, { Component } from "react";

import "./App.css";

class XIR1 extends Component{
    constructor(props){
        super(props);
        this.state = { state1: "Hai ", state2 : ""};
    };

    //update
    salamkan = () => {
        this.setState({ state1: "Bagaimana Kabarmu "});
    };

    handleChange = event => {
        this.setState({
            state2: event.target.value
        });
    };

    render(){
        return(
            <div clasName="color">
                <input type="text" onChange={this.handleChange} />
                <br />
                {this.state.state1}
                {this.props.namaDepan}{this.props.namaBelakang}
                <h5>{this.state.state2}</h5>
                <button onClick={this.salamkan}>Tanya kabar</button>
            </div>
        );
    }

}


export default XIR1;