import React from "react";

class BadgeForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobtitle: "",
    twitter: "",
  };

  handlechange = (e) => {
    //console.log({ name: e.target.name, value: e.target.value });
    this.setState({
      //firstName: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

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
              onChange={this.handlechange}
              className="form-control"
              type="text"
              name="FirstName"
              placeholder="User"
              value={this.state.FirstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handlechange}
              className="form-control"
              type="text"
              name="LastName"
              placeholder="User"
              value={this.state.LastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handlechange}
              className="form-control"
              type="email"
              name="Email"
              placeholder="User"
              value={this.state.Email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handlechange}
              className="form-control"
              type="text"
              name="jobtitle"
              placeholder="User"
              value={this.state.jobtitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handlechange}
              className="form-control"
              type="text"
              name="twitter"
              placeholder="User"
              value={this.state.twitter}
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
