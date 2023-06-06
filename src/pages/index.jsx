import React from "react";
import Button from "../components/Button";

export default class PressStartScreen extends React.Component {

    onClick() {
        this.props.onClick();
    }

    render() {
        return (
            <div style={style}>
                <Button>
                    <p style={startStyle} onClick={() => this.onClick()}>Press Start</p>
                </Button>
            </div>
        );
    }

}

const style = {
    padding: '16px'
}

const startStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto'
}