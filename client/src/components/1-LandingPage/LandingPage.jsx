import "./landingpage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Video from "../../Videos/Pressstart.mp4";
import audio from "../../Sound/pressstart.mp3";

export default class LandingPage extends Component {

    playAudio = () => {
        new Audio(audio).play();
    }

    handleclick = () => {
        this.playAudio();
    }

    render() {

        return (
            <div className="Landing">
                <video id="startvideo" className="tv-video" autoPlay loop muted disablePictureInPicture>
                    <source src={Video} type="video/mp4" disablePictureInPicture />
                </video>

                <Link to="/home">
                    <button id="trend_exp_bt" className="land-button" onClick={this.handleclick}/>
                </Link>

                <Link to="/home">
                    <h3 className="start" onClick={this.handleclick}>START</h3>
                </Link>
            </div>
        )
    }
};