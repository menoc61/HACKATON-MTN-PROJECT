import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MicNoneRoundedIcon from "@material-ui/icons/MicNoneRounded";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import PresentToAllRoundedIcon from "@material-ui/icons/PresentToAllRounded";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import { Link } from "react-router-dom";
import "./style.scss";

const JoinClass = () => {
  return (
    <div> 
      <Navbar />
      <div className="joinClass">
        {/* meeting section  */}
        <div className="meeting">
          <h3 className="meeting-code">xyz-ghq-tyu</h3>

          <div className="meeting-screen">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjJflBWUNTLijUb_GMzU9o7aSyRbBLkip8A&usqp=CAUg"
              alt="profileimg"
            />
          </div>

          <div className="meeting-controls">
            <button>
              <MicNoneRoundedIcon className="icon" />
            </button>
            <button>
              <VideocamOutlinedIcon className="icon" />
            </button>
            <button>
              <PresentToAllRoundedIcon className="icon" />
            </button>
          </div>
        </div>

        {/* join meeting section  */}
        <div className="join-meeting">
          <h1>Join meeting ?</h1>

          <div className="btn-container">
            <Link to="/class" className="link">
              <button>Ask to join</button>
            </Link>
            <h3>or</h3>

            <Link to="/class/create" className="link">
              <button className="createBtn">
                <VideoCallOutlinedIcon className="icon" /> New meeting
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClass;
