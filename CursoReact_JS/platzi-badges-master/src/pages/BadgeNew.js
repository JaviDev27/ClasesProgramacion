import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import heder from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      FirstName: "",
      LastName: "",
      Email: "",
      jobtitle: "",
      twitter: "",
    },
  };

  // handleChange = (e) => {
  //   const nextForm = this.state.form; // se crea una copya del valor
  //   nextForm[e.target.name] = e.target.value;

  //   this.setState({
  //     form: nextForm,
  //   });
  // };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

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
                firstName={this.state.form.FirstName}
                lastName={this.state.form.LastName}
                email={this.state.form.Email}
                avatarUrl="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                job={this.state.form.jobtitle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
