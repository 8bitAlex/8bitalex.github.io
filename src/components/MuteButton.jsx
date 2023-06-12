import React from "react";
import Button from "./Button";

export default class MuteButton extends React.Component {

    render() {
        return (
            <Button style={this.props.style} onClick={this.props.onClick}>
                { this.state.hasSound ? <Button.Image src={'../assets/img/Speaker.png'} alt={"Speaker Icon"}/> :
                <Button.Image src={'../assets/img/Speaker.png'} alt={"Muted Speaker Icon"}/>}
            </Button>
        );
    }

}