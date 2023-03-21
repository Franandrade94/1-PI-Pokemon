import "./nav.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import audio from "../../Sound/NAV.wav";

export default class Nav extends Component {

    playAudio = () => {
     //   window.location.reload();
        new Audio(audio).play();
    }

    OnClick = () => {
     //   window.location.reload();
        this.playAudio();
    }

    render() {
        return(
            <div className="nav">
                <Link className="link-home" to="/home" onClick={this.OnClick}>Home</Link>

                <Link className="link" to="/pokemon/create" onClick={this.playAudio}>Create Pokemon</Link>

                <Link className="link" to="/" onClick={this.playAudio}>Start</Link>
            </div>
        )
    }
};