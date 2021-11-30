import { useState, useEffect } from "react";
import profile from "../../images/profile.jpg";
import {
  FormGroup,
  FormControl,
  InputLabel,
  
  Input,
  Button,

  Typography,
} from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { getGyms, gymParticipate } from "../../Service/api";
import { useHistory } from "react-router";

const initialValue = {
  gymImg: profile,
  gymAddress: "",
  gymName: "",
  gymDescription: "",
};


const ParticipatingGyms = () => {
  const [gym, setGym] = useState(initialValue);
  const { gymImg, gymName, gymAddress, gymDescription } = gym;
  const history = useHistory();
  
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
    <FormGroup >
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
        <label style={{marginBottom: "1rem"}}>Gym Image</label>
        <FileBase64
          multiple={false}
          onDone={({ base64 }) => setGym({ ...gym, gymImg: base64 })}
        />
      </FormControl>
      <FormControl>
        <label>Gym Description</label>
        <textarea
          aria-label="empty textarea"
          placeholder="Enter..."
          name="gymDescription"
          onChange={(e) => onValueChange(e)}
          value={gymDescription}
          style={{ height: 200 }}
        ></textarea>
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
