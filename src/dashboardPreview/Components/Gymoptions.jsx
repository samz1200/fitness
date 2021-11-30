import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { addGymOptions } from "../../Service/api";



const GymOptions = () => {
  const [option, setOption] = useState({
    value: "",
    price: "",
  });
  const [check, setCheck] = useState(false);
  

  const submitOptions = async () => {
    console.log(option);
    const { data } = await addGymOptions(option);
    if (data) {
      setCheck(true);
    }
    setOption({
      value: "",
      price: "",
    });

    setTimeout(() => {
      setCheck(false);
    }, 2000);
  };

  // const addRadioBox = async () => {
  //   setOption([...option, value]);
  //   const { data } = await addGymOptions(option);
  //   if (data) {
  //     setCheck(true);
  //   }
  //   setValue("");

  //   setTimeout(() => {
  //     setCheck(false);
  //   }, 2000);
  // };

  const onValueChange = ({ target }) => {
    const { name, value } = target;
    setOption({ ...option, [name]: value });
  };

  return (
    <>
      <FormGroup >
        <Typography variant="h4">Gym Radio Options</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter Option</InputLabel>
          <Input
            onChange={onValueChange}
            name="option"
            value={option.value}
            name="value"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option.price}
            name="price"
            label="Price"
            onChange={onValueChange}
          >
            <MenuItem value={150}>$150</MenuItem>
            <MenuItem value={500}>$500</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button variant="contained" color="primary" onClick={submitOptions}>
            Add Option
          </Button>
        </FormControl>
        <FormControl>
          <div style={{ display: check ? "block" : "none" }}>
            <p >Option added</p>
          </div>
        </FormControl>
        {/* <FormControl>
          <div>
            {option?.map((item, index) => (
              <p className={classes.pTag} key={index}>
                {item}
              </p>
            ))}
          </div>
        </FormControl> */}
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
