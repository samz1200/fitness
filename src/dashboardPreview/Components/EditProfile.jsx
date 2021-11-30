import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Select,
  Typography,
} from "@material-ui/core";
import { getUsers, editUser } from "../../Service/api";
import { MenuItem } from "react-pro-sidebar";

const initialValue = {
  fName: "",
  lName: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  referral: "",
  email: "",
  pNumber: "",
  unit: "",
  emContactfName: "",
  emContactlName: "",
  emContacteMail: "",
  emContactpNumber: "",
  password: "",
};



const EditProfile = ({ id }) => {
  const [user, setUser] = useState(initialValue);
  const {
    fName,
    lName,
    dateOfBirth,
    gender,
    address,
    referral,
    email,
    pNumber,
    unit,
    emContactfName,
    emContactlName,
    emContacteMail,
    emContactpNumber,
    password,
  } = user;


  useEffect(() => {
    loadUserDetails();
  }, [id]);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    if (response) {
      alert("profile Updated.");
    }
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
        <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="dateOfBirth"
          value={dateOfBirth}
          type="date"
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="gender"
          value={gender}
          label="gender"
          onChange={(e) => onValueChange(e)}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Transgender">Transgender</MenuItem>
          <MenuItem value="Non-Binary">Non-Binary</MenuItem>
        </Select>
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
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Apt/Suite/Unite (optional)</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="unit"
          value={unit}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Emergency Contact First</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="emContactfName"
          value={emContactfName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Emergency Contact Last</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="emContactlName"
          value={emContactlName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Emergency Contact E-mail</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="emContacteMail"
          value={emContacteMail}
          id="my-input"
          type="email"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">
          Emergency Contact Phone Number
        </InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="emContactpNumber"
          value={emContactpNumber}
          id="my-input"
          type="number"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit Profile
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditProfile;
