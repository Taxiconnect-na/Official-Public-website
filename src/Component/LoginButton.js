import classes from "../styles/LoginButton.module.css";
import { Person } from "@material-ui/icons";

const LoginButton = () => {
  return (
    <div className={classes.container}>
      <Person fontSize="small" />
      <span style={{ marginLeft: "5px" }}>Login</span>
    </div>
  );
};

export default LoginButton;
