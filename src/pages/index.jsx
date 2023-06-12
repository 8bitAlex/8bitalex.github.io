import React from "react";
import Button from "../components/Button";
import { navigate } from "gatsby"

export default class PressStartScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    onClick() {
        document.body.className += "zoom";
        setTimeout(() => {
          navigate('/home')
        }, 500);
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