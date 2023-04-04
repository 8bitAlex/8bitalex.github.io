import React from "react";
import { getSound } from "../utils";

export default class Button extends React.Component {

    componentDidMount() {
        this.hightlight = new Audio("/sound/hightlight.mp3");
        this.select = new Audio("/sound/select.mp3");
    }

    onHover() {
        if(getSound()) this.hightlight.play();
    }

    onClick() {
        if(getSound()) this.select.play(); 
        this.props.onClick?.();
    }

    render() {
        return (
            <div className="button" {...this.props} onMouseOver={() => {this.onHover()}} onClick={() => {this.onClick()}}>
                {this.props.children}
            </div>
        );
    }

}