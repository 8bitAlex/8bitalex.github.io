import React from "react";
import { getSound, zoom } from "../utils";
import Highlight from "../assets/sound/hightlight.mp3";
import Select from "../assets/sound/select.mp3";
import { StaticImage } from "gatsby-plugin-image";

export default class Button extends React.Component {

    static Image = Image

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
        zoom(this.props.href)
    }

    render() {
        return (
            <div className="button" {...this.props} onMouseOver={() => {this.onHover()}} onClick={() => {this.onClick()}}>
                {this.props.children}
            </div>
        );
    }

}

//todo fix this stupid gatsby bug, maybe remove StaticImage and make own
function Image(props) {
    console.log(props.src)
    return (<StaticImage {...props} style={{...props.style, ...{width: '48px', height:'48px'}}} />)
}