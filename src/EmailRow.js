import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { selectMail } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  // const link = () => history.push("/mail");
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

      <h3 className="emailRow__title" onClick={openMail}>
        {title}
      </h3>

      <div className="emailRow__message" onClick={openMail}>
        <h4>
          {subject}{" "}
          <span className="emailRow__description" onClick={openMail}>
            - {description}
          </span>
        </h4>
      </div>

      <div className="emailRow__time" onClick={openMail}>
        {time}
      </div>
    </div>
  );
}

export default EmailRow;
