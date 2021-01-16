import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const link = () => history.push("/mail");
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title" onClick={link}>
        {title}
      </h3>

      <div className="emailRow__message" onClick={link}>
        <h4>
          {subject}{" "}
          <span className="emailRow__description" onClick={link}>
            - {description}
          </span>
        </h4>
      </div>

      <div className="emailRow__time" onClick={link}>
        {time}
      </div>
    </div>
  );
}

export default EmailRow;
