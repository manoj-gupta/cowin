import React from "react";
import { Card, CardContent } from "@material-ui/core";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// internal
import { useStyles } from "../styles";

const Body = ({ Centers }) => {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: "40px" }}>
      {Centers &&
        Centers.map((res, i) => (
          <Card style={{ marginBottom: "20px" }}>
            <CardContent>
            <div className={classes.centerName}>
              <span>
                  <PinDropIcon />
              </span>
              {res.name}
            </div>
            <div className={classes.address}>
                Address: {res.address}, {res.pincode}
              <div className={classes.feeType}>
                {res.fee_type}
              </div>
            </div>
            </CardContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Available Capacity</TableCell>
                    <TableCell>Age</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {res.sessions.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell component="th" scope="row">
                        {row.date}{" "}
                      </TableCell>
                      <TableCell align="left">
                        {row.available_capacity > 0 &&
                          <span className={classes.available}>{row.available_capacity}</span>
                        }
                        {row.available_capacity === 0 &&
                          <span className={classes.unavailable}>{row.available_capacity}</span>
                        }
                      </TableCell>
                      <TableCell align="left">
                        {row.min_age_limit === 45 &&
                          <span className={classes.age45}>{row.min_age_limit}+</span>
                        }
                        {row.min_age_limit === 18 &&
                          <span className={classes.age18}>{row.min_age_limit}+</span>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        ))}
    </div>
  );
};

export default Body;
