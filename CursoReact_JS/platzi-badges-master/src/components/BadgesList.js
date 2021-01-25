import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badges) => {
          return (
            <li key={badges.id} className="BadgesListItem">
              <img
                src={badges.avatarUrl}
                alt=""
                className="BadgesListItem__avatar"
              />

              <div>
                <div>
                  {badges.firstName} {badges.lastName}
                </div>
                <div>
                  <img
                    className="LogoTwiter"
                    src="https://logos-marcas.com/wp-content/uploads/2020/04/Twitter-Logo.png"
                    alt="twitter"
                  />
                  <a href="/">@{badges.twitter}</a>
                </div>

                <div>{badges.jobTitle}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
