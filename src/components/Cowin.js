import React, { useState } from 'react'

// internal
import { useStyles } from "../styles";

const Cowin = () => {
  const classes = useStyles();

  return (
    <div>
      {/* Header */}
      <div className={classes.header}>
        Cowin Slot Checker
      </div>

      {/* Body */}
      Body goes here

      {/* Footer */}
      <div className={classes.footer}>
        Data served from CoWIN Portal API.
      </div>
      </div>

  )
};

export default Cowin;
