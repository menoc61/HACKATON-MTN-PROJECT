import React from "react";
import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DetailedMaterial from "../../components/detailedMeterial/DetailedMaterial";
import ClassComment from "../../components/classComment/ClassComment";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";

function IndividualTask() {
  return (
    <div className="individual-task">
      <Navbar />
      <Sidebar />
      <div className="container">
        <div className="wrapper">
          <DetailedMaterial
            type="task"
            title="Ca1 Assignment"
            postedBy="Debnarayan Khatua"
            timeOfPosting="9:30 am"
            subject="Data Structure & Algorithms"
            filename="Stack assignment.pdf"
          />

          <div className="comment-heading">
            <QuestionAnswerRoundedIcon className="icon" />
            <h3>Class comments</h3>
          </div>

          <ClassComment type="writeComment" />
          <ClassComment
            type="writtenComment"
            postedBy="Soumen Jana"
            timeOfPosting="9:20 am"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9t7VOESps3y6t6qIMAGPai0sbH9LUWt9dQ&usqp=CAU"
            message="Sir how many marks for each question?"
          />
          <ClassComment
            type="writtenComment"
            postedBy="Abhik Das"
            timeOfPosting="9:20 am"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2-51vyAHU4Urt5e5n5dD9PTEtHnQ-wTpVg&usqp=CAU"
            message="Sir can you please give some notes on complete graph, cyclic graph, acyclic graph, connected graph, disconnected graph, weighted graph, directed graph, undirected graph, trivial graph, bipartite graph, star graph, multi graph"
          />
        </div>
      </div>
    </div>
  );
}

export default IndividualTask;
