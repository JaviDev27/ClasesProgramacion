import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import heder from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={heder} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Javier"
                lastName="Manobanda"
                avatarUrl="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                job="Frontend Engineer and Mechatronic"
                twitter="javi_manobanda"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
