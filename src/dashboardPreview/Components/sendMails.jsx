import { useEffect, useState } from "react";
import { getUsers, sendallMailAddress } from "../../Service/api";
import { FormGroup, Button,  Typography } from "@material-ui/core";



const Sendmails = () => {
  const [check, setCheck] = useState(false);
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
    <FormGroup >
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
