import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#6EC177",
    color: "#F8F8FF",
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: 600,
    height: "60px",
    paddingTop: "20px",
    width: "100%",
  },
  footer: {
    backgroundColor: "#ffff00",
    bottom: 0,
    position: "fixed",
    width: "100%",
  },
}));