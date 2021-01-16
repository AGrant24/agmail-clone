import React from "react";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Mail() {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportantIcon className="mail__important" />
          <p>Title</p>
          <p className="mail__time">00:00</p>
        </div>
        <div className="mail__message">
          <p>
            Free React Most Wanted: Created with Create React App Custom Create
            React App script to start a new project with just a single CLI
            command Build for Firebase including Authentication using the
            official Firebase Web Auth UI Routing with React Router including
            error handling (404) and lazy loading All PWA features included (SW,
            Notifications, deferred installation prompt and more) Optimized and
            scalable performance (all ~100 points on Lighthouse) RMUIF:
            Bootstrapped with Create React App, the same tooling works from the
            get-go Built on top of Firebase with all their products for the web
            included Robust routing with React Router including protected routes
            and error handling Extensive mobile support with full-screen dialogs
            and react-swipeable-views for tabs Cross-platform application
            monitoring with a focus on error reporting with Sentry Material
            online tool Choose your framework and library (React & Material-UI!)
            Choose your database (SQL, MongoDB or Firestore) Model your database
            and application with the intuitive GUI Generate your application,
            including a complete scaffolded backend Preview your application
            online, and download the generated code
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
