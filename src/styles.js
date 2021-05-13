import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#6EC177",
    fontSize: 36,
    fontWeight: 600,
    height: "60px",
    paddingTop: "20px",
    width: "100%",
  },
  footer: {
    backgroundColor: "#6EC177",
    bottom: 0,
    position: "fixed",
    width: "100%",
  },
  textfield: {
    alignSelf: "center",
  },
  btn: {
    padding: 6,
    marginLeft: "20px",
  },
  feeType: {
    backgroundColor: "#20065f",
    color: "#ffffff",
    width: "120px",
    borderRadius: "60px",
    textAlign: "center",
    fontSize: "20px",
    letterSpacing: "4px",
    marginLeft: "auto",
    alignSelf: "center",
  },
  centerName: {
    backgroundColor: "#14948b",
    color: "#ffffff",
    display: "flex",
    fontSize: "20px",
    textAlign: "center",
  },
  available: {
    color: "white",
    backgroundColor: "#ff6f62",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "16px",
  },
  age: {
    color: "white",
    backgroundColor: "#14948b",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "16px",
  },
  address: {
    textAlign: "start",
    marginTop: "16px",
    display: "flex",
  }
}));
