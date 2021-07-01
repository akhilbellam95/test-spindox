import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonIcon from "@material-ui/icons/PersonPin";
import EmailIcon from "@material-ui/icons/Email";
import EventNote from "@material-ui/icons/EventNote";
import Phone from "@material-ui/icons/Phone";
import Map from "@material-ui/icons/Map";
import Lock from "@material-ui/icons/Lock";
// import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dob = 
  new Date(props.data.dob.date).getDate() 
  + "/" + new Date(props.data.dob.date).getMonth() 
  + "/" + new Date(props.data.dob.date).getFullYear();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div style={{ height: "150px" }}>
        {value === 0 && (
          <React.Fragment>
            <h5>Hi, My name is</h5>
            <h1>{props.data.name.first}</h1>
          </React.Fragment>
        )}
        {value === 1 && (
          <React.Fragment>
            <h5>My email address is</h5>
            <h1>{props.data.email}</h1>
          </React.Fragment>
        )}
        {value === 2 && (
          <React.Fragment>
            <h5>My birthday is</h5>
            <h1>{dob}</h1>
          </React.Fragment>
        )}
        {value === 3 && (
          <React.Fragment>
            <h5>My address is</h5>
            <h1>{props.data.location.street.name}</h1>
          </React.Fragment>
        )}
        {value === 4 && (
          <React.Fragment>
            <h5>My phone number is</h5>
            <h1>{props.data.phone}</h1>
          </React.Fragment>
        )}
        {value === 5 && (
          <React.Fragment>
            <h5>My password is</h5>
            <h1>{props.data.login.password}</h1>
          </React.Fragment>
        )}
      </div>

      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<PersonIcon />} />
          <Tab icon={<EmailIcon />} />
          <Tab icon={<EventNote />} />
          <Tab icon={<Map />} />
          <Tab icon={<Phone />} />
          <Tab icon={<Lock />} />
        </Tabs>
      </Paper>
    </div>
  );
}
