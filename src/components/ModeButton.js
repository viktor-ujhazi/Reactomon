import React, { Component } from "react";

class ModeButton extends Component {
    state={
        lightMode: true,
    };

    changeMode(){
        if(this.state.lightMode === true){
            this.setState({
            lightMode: false,
            })

            //TODO darkmode
            let page = document.getElementById("root")
            
            page.setAttribute("style", "background-color: grey")
            page = document.querySelectorAll(".card")
            page.forEach(element => element.setAttribute("style", "background-color: darkgray;"+
            "border: solid;"+ 
            "margin-block-start: 20px;"+
            "margin-block-end: 20px;"+
            "margin-left: 20px;"+
            "margin-right: 20px;"+
            "width: 150px;"+
            "text-align: center"))
            
            page = document.querySelector("#navbar")
            page.setAttribute("style", "padding-left: 40px;"+
            "border: 5px solid cornflowerblue;"+
            "background-color: brown;"+
            "text-align: center;"+
            "font-size: xxx-large;"+
            "font-weight: 900;")
        }else{
            this.setState({
                lightMode: true,
            })
            //TODO lightmode
            let page = document.getElementById("root")
            
            page.setAttribute("style", "background-color: white")
            page = document.querySelectorAll(".card")
            page.forEach(element => element.setAttribute("style", "background-color: peachpuff; border: solid; margin-block-start: 20px; margin-block-end: 20px; margin-left: 20px; margin-right: 20px; width: 150px; text-align: center"))
            
            page = document.querySelector("#navbar")
            page.setAttribute("style", "padding-left: 40px; border: 5px solid cornflowerblue; background-color: yellow; text-align: center; font-size: xxx-large; font-weight: 900;")
        }
    }
    
    
    render(){
        return(
            <button onClick = { () => this.changeMode()}>Switch Theme</button>
        )
    }
}

export default ModeButton;