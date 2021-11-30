import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
   Typography,
} from "@material-ui/core";
import { getUsers, editUser } from "../../Service/api";

const initialValue = {
  fName: "",
  lName: "",
  email: "",
  pNumber: "",
};



const EditUser = ({ id, setShowEditForm }) => {
  const [user, setUser] = useState(initialValue);
  const { fName, lName, referral, email, pNumber } = user;
 

  useEffect(() => {
    loadUserDetails();
  }, [id]);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    setShowEditForm(false);
  };

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup >
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="fName"
          value={fName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lName"
          value={lName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Referral</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="referral"
          value={referral}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="pNumber"
          value={pNumber}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
