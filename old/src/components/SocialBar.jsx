import React from "react";
import Button from "./Button";

export default class SocialBar extends React.Component {

    render() {
        return (
            <div style={{...this.props.style}}>
                <Button style={buttonStyle} onClick={() => {window.open('https://github.com/8bitAlex','_newtab');}}><img src="../img/github_64.png" alt="Github icon"/></Button>
                <Button style={buttonStyle} onClick={() => {window.open('https://www.linkedin.com/in/8bitalex/','_newtab');}}><img src="../img/linkedin_64.png" alt="LinkedIn icon"/></Button>
            </div>
        );
    }

}

const buttonStyle = {
    display: 'inline-block',
    margin: '4px'
}