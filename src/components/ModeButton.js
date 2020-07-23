import React, { Component } from "react";

class ModeButton extends Component {
    state={
        lightMode: true,
    };

    


    
    
    
    render(){
        return(
            <button onClick = { () => this.changeMode()}>Switch Theme</button>
        )
    }
}

export default ModeButton;