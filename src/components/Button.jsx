import React from "react";
import { getSound } from "../utils";
import Highlight from "../assets/sound/hightlight.mp3";
import Select from "../assets/sound/select.mp3";
import { Link } from "gatsby-link";

export default class Button extends React.Component {

    componentDidMount() {
        this.hightlight = new Audio(Highlight);
        this.select = new Audio(Select);
    }

    onHover() {
        if(navigator.userActivation.hasBeenActive && getSound()) this.hightlight.play();
    }

    onClick() {
        if(navigator.userActivation.hasBeenActive && getSound()) this.select.play(); 
        this.props.onClick?.();
    }

    render() {
        return (
            <div className="button" {...this.props} onMouseOver={() => {this.onHover()}} onClick={() => {this.onClick()}}>
                <Link to={this.props.href}>{this.props.children}</Link>
            </div>
        );
    }

}