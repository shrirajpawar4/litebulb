import React from "react";
import myIcon from "../icon.svg";
import Button from "@mui/material/Button";
import "../styles/products.css";

export default function desc() {
  return (
    <div className="fcontainer">
      <div>
        <img
          src={myIcon}
          alt="icon"
          style={{
            width: "92px",
            height: "92px",
            padding: "100px",
            paddingBottom: 0
          }}
        />
      </div>
      <div className="fcontainer buttons">
        <div className="button">
          <Button variant="contained">Build</Button>
        </div>
        <div className="button">
          <Button variant="outlined">Vouch</Button>
        </div>
      </div>
    </div>
  );
}
