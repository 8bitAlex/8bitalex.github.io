import React from "react";
import Button from "./Button";
import { StaticImage } from "gatsby-plugin-image";

export default class MuteButton extends React.Component {

    render() {
        return (
            <Button style={this.props.style} onClick={this.props.onClick}>
                { this.state.hasSound ? <StaticImage src={'../assets/img/Speaker.png'} alt={"Speaker Icon"}/> :
                <StaticImage src={'../assets/img/Speaker.png'} alt={"Muted Speaker Icon"}/>}
            </Button>
        );
    }

}