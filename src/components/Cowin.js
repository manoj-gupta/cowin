import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

// axios for REST queries
import axios from "axios";

// internal
import { useStyles } from "../styles";
import Body from "./Body";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Cowin = () => {
  const classes = useStyles();

  // states
  const [pinCode, setPinCode] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [Type, setType] = useState("");
  const [Message, setMessage] = useState("");
  const [Centers, setCenters] = useState();

  const getSlots = async () => {
    const obj = new Date();
    try {
      const response = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${obj.getDate()}-${
          obj.getMonth() + 1
        }-${obj.getFullYear()}`
      );
      // console.log(response.data.centers);
      if (response.data.centers.length > 0) {
        setOpen(true);
        setType("success");
        setMessage("Data Found");
      } else {
        setOpen(true);
        setType("info");
        setMessage(`Cowin data not available for this ${pinCode}`);
      }

      setCenters(response.data.centers);
    } catch (err) {
      setOpen(true);
      setType("error");
      setMessage("Invalid Pincode");
    }
  };

  const resetOnClose = () => {
    setOpen(false);
    setType("");
    setMessage("");
  };

  return (
    <div className={classes.container}>
      {/* Header */}
      <div className={classes.header}>
        Cowin Slot Checker
      </div>

      {/* Input */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className={classes.textfield}>
          <TextField
            id="outlined-helperText"
            label="Enter Pincode"
            // helperText="Click Submit to Get slot"
            variant="outlined"
            fullWidth
            size="medium"
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div className={classes.btn}>
          <Button
            variant="contained"
            color="secondary"
            onClick={getSlots}
          >
            Get Slots
          </Button>
        </div>
      </div>

      {/* Display centers */}
      <Body Centers={Centers} />

      {/* Footer */}
      <div className={classes.footer}>
        Data served from <a href="https://apisetu.gov.in/public/marketplace/api/cowin" target="_blank" rel="noopener noreferrer">CoWIN Portal API</a>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={resetOnClose}>
        <Alert onClose={resetOnClose} severity={Type}>
          {Message}
        </Alert>
      </Snackbar>
    </div>
  )
};

export default Cowin;
