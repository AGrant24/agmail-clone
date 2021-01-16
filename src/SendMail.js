import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__clone" />
      </div>
      <form>
        <input placeholder="to" type="text" />
        <input placeholder="Subject" type="text" />
        <input
          placeholder="Message"
          type="text"
          className="sendMail__message"
        />
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;