import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { addGymOptions } from "../../Service/api";



const GymOptions = () => {
  const [option, setOption] = useState([]);
  const [value, setValue] = useState();
  

  // const submitOptions = async () => {
  //   const optionData = {
  //     option,
  //   };
  //   const { data } = await addGymOptions(option);
  //   console.log(option);
  //   if (data) {
  //     alert("your gym Options added to your website");
  //   }
  // };

  const addRadioBox = async () => {
    setOption([...option, value]);
    const { data } = await addGymOptions(option);
    // console.log(data);
    if (data) {
      console.log("your gym Options added to your website");
    }
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
            Submit Option
          </Button>
        </FormControl>
        <FormControl>
          <div>
            {option?.map((item, index) => (
              <p  key={index}>
                {item}
              </p>
            ))}
          </div>
        </FormControl>
        {/* <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => submitOptions()}
          >
            Submit all Options
          </Button>
        </FormControl> */}
      </FormGroup>
    </>
  );
};

export default GymOptions;
