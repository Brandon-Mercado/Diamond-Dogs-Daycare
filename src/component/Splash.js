import React from "react";
import blacklogo from "../img/black21200.png";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <div class="object-center hover:animate-roll">
          <img
            class="mx-auto pt-20"
            width="1000"
            src={blacklogo}
            alt="Frenchie head logo"
          />
        </div>
      </div>
    );
  }
}

export default Splash;
