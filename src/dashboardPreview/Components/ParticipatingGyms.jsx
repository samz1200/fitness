import { useState, useEffect } from "react";
import profile from "../../images/profile.jpg";
import {
  FormGroup,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { getGyms, gymParticipate } from "../../Service/api";
import { useHistory } from "react-router";

const initialValue = {
  gymImg: profile,
  gymAddress: "",
  gymName: "",
  gymDescription: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const ParticipatingGyms = () => {
  const [gym, setGym] = useState(initialValue);
  const { gymImg, gymName, gymAddress, gymDescription } = gym;
  const history = useHistory();
  const classes = useStyles();
  // console.log(gym);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getGyms();
    console.log(response.data);
  };

  const addGym = async () => {
    const response = await gymParticipate(gym);
    if (response) {
      alert("your gym added to your website");
      history.push("/gym");
    }
  };

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setGym({ ...gym, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Participating Gyms {"&"} Studios</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Gym Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="gymName"
          value={gymName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Gym Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="gymAddress"
          value={gymAddress}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Gym Image</InputLabel>
        <Input
        //   onChange={(e) => setGym({ ...gym, gymImg: e.target.files[0] })}
          type="file"
          name="lName"
          //   value={lName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <label>Gym Description</label>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Enter..."
          name="gymDescription"
          onChange={(e) => onValueChange(e)}
          value={gymDescription}
          style={{ height: 200 }}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={() => addGym()}>
          Add Gym
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default ParticipatingGyms;
