import React from "react";
import PressStart from "../components/PressStart";

export default class HomeScreen extends React.Component {

    onClick() {
        this.props.onClick();
    }

    render() {
        return (
            <div style={style}>
                <PressStart onClick={() => this.props.onClick()} />
            </div>
        );
    }

}

const style = {
    padding: '16px'
}