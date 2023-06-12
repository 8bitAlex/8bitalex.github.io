import React from "react";
import Button from "../components/Button";
import SocialBar from "../components/SocialBar";
import { getSound, setSound } from "../utils";
import { StaticImage } from "gatsby-plugin-image";

export default class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            hasSound: getSound()
        }
    }

    onClick() {
        this.props.onClick();
    }

    toggleSound() {
        const hasSound = this.state.hasSound;
        setSound(!hasSound);
        this.setState({hasSound:!hasSound});
    }

    render() {
        return (
            <div style={style}>
                <h1 style={{paddingTop:'128px', paddingBottom:'48px'}}>Alex Salerno</h1>
                <Button href="/blog"><p>Blog</p></Button>
                
                <SocialBar style={lowerRight} />
                <Button style={lowerLeft} onClick={() => this.onClick()}>
                    { this.props.hasSound ? <StaticImage src={'../assets/img/Speaker.png'} alt={"Speaker Icon"} style={{width:'48px', height:'48px'}}/> :
                    <StaticImage src={'../assets/img/Speaker.png'} alt={"Muted Speaker Icon"} style={{width:'48px', height:'48px'}}/>}
                </Button>
            </div>
        );
    }

}

const style = {
    padding: '16px'
}

const lowerRight = {
    position: 'fixed',
    right: '32px',
    bottom: '32px'
}

const lowerLeft = {
    position: 'fixed',
    left: '32px',
    bottom: '32px'
}