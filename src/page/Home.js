import React from "react";
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import LeftNavbar from "../components/LeftNavbar";
import TopNavbar from "../components/TopNavbar";

const Home = () => {
  return (
    <div className="home">
      <LeftNavbar />
      <div style={{ width: "80vw", height: "100%" }}>
        <TopNavbar />
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <h3 className="heading">Your Active Projects</h3>
            <div style={{display:"flex"}}>
                <Container1 heading="Project 1"/>
                <Container1 heading="Project 2"/>
            </div>
            <h3 className="heading">Current Open Internship</h3>
            <div style={{display:"flex"}}>
                <Container1 heading="Internship 1"/>
                <Container1 heading="Internship 2"/>
            </div>
            <h3 className="heading">Your Role and Permissions</h3>
            <div style={{display:"flex"}}>
                <Container1 heading="Role"/>
                <Container1 heading="Permission"/>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <h3 className="heading">Announcements</h3>
            <Container2/>
            <h3 className="heading">Current Activity</h3>
            <Container2/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
