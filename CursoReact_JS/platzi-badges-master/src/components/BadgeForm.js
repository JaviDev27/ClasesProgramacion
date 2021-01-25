import React from "react";

class BadgeForm extends React.Component {
  /*   state = {
    firstName: "",
    lastName: "",
    email: "",
    jobtitle: "",
    twitter: "",
  }; */

  handleClick = (e) => {
    console.log("button was clic");
  };

  handleSummit = (e) => {
    e.preventDefault(); // para que el formulario no se envie
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSummit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="FirstName"
              placeholder="First Name"
              value={this.props.formValues.FirstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="LastName"
              placeholder="Last Name"
              value={this.props.formValues.LastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="Email"
              placeholder="Email"
              value={this.props.formValues.Email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobtitle"
              placeholder="Engineer"
              value={this.props.formValues.jobtitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              placeholder="Twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
