import React from "react";

import "./custom-buttom.styles.scss";

//inverted é usado para estilizar botao dos cards da tela shops
const OldButtonCustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default OldButtonCustomButton;
