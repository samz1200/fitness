import { useEffect, useState } from "react";
import { getUsers, sendallMailAddress } from "../../Service/api";
import { FormGroup, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    textAlign: "center",
    "& > *": {
      marginTop: 20,
    },
  },
});

const Sendmails = () => {
  const [check, setCheck] = useState(false);
  const classes = useStyles();
  const [users, setUsers] = useState();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const sendAllMails = async () => {
    var arr = [];
    users.map((item) => {
      arr.push(item.email);
    });
    var response = await sendallMailAddress(arr);
    if (response.status) {
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
      }, 4000);
    }
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Send Mail to all Users</Typography>
      <Button variant="contained" color="primary" onClick={sendAllMails}>
        Send
      </Button>
      {check ? (
        <Typography variant="h6" style={{ color: "green" }}>
          Mail sent to all Users
        </Typography>
      ) : (
        ""
      )}
    </FormGroup>
  );
};
export default Sendmails;
