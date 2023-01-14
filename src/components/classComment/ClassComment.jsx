import React from "react";
import "./style.scss";
import SendIcon from "@material-ui/icons/Send";

const ClassComment = ({
  type,
  postedBy,
  timeOfPosting,
  profilePic,
  message,
}) => {
  const userProfilePic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjJflBWUNTLijUb_GMzU9o7aSyRbBLkip8A&usqp=CAU";

  return (
    <div className={"comment " + type}>
      <img
        src={type === "writtenComment" ? profilePic : userProfilePic}
        alt="profile"
      />

      {type === "writtenComment" ? (
        <div className="textContent">
          <div className="topSection">
            <h4>{postedBy}</h4>
            <p>{timeOfPosting}</p>
          </div>
          <p className="message">{message}</p>
        </div>
      ) : (
        <div className="inputSection">
          <input type="text" placeholder="Add class comment" />
          <button>
            <SendIcon className="icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassComment;
