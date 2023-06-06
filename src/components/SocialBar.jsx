import React from "react";
import Button from "./Button";
import { StaticImage } from "gatsby-plugin-image";

export default class SocialBar extends React.Component {

    render() {
        return (
            <div style={{...this.props.style}}>
                <Button style={buttonStyle} onClick={() => {window.open('https://github.com/8bitAlex','_newtab');}}><StaticImage src="../assets/img/github_64.png" alt="Github icon"/></Button>
                <Button style={buttonStyle} onClick={() => {window.open('https://www.linkedin.com/in/8bitalex/','_newtab');}}><StaticImage src="../assets/img/linkedin_64.png" alt="LinkedIn icon"/></Button>
            </div>
        );
    }

}

const buttonStyle = {
    display: 'inline-block',
    margin: '4px'
}