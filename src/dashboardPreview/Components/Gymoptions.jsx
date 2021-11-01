import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { addGymOptions } from "../../Service/api";



const GymOptions = () => {
  const [option, setOption] = useState([]);
  const [value, setValue] = useState();
  

  const submitOptions = async () => {
    const optionData = {
      option,
    };
    const { data } = await addGymOptions(option);
    console.log(data.option);
    if (data) {
      alert("your gym Options added to your website");
    }
  };

  const addRadioBox = () => {
    setOption([...option, value]);
    setValue("");
  };

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <FormGroup >
        <Typography variant="h4">Gym Radio Options</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter Option</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="option"
            value={value}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addRadioBox()}
          >
            Add
          </Button>
        </FormControl>
        <FormControl>
          <div style={{ display: "flex" }}>
            {option?.map((item, index) => (
              <p  key={index}>
                {item}
              </p>
            ))}
          </div>
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => submitOptions()}
          >
            Submit all Options
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default GymOptions;
