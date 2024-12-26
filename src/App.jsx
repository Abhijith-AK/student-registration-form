// import { Button, Stack,  FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
// import './App.css'
// import { useState } from 'react'
import HigherSecondaryAdmissionForm from './HigherSecondaryAdmissionForm';


function App() {

  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [phoneNo, setPhoneNo] = useState(0);
  // const [email, setEmail] = useState(0);
  // const [gender,  setGender] = useState(false)
  // const [date, setDate] = useState(false)
  // const [course, setCourse] = useState(false)

  // const validateInput = (inputTag) => {
  //   console.log(inputTag, typeof inputTag);
  //   const { name, value } = inputTag;
  //   // console.log(name, !!value.match(/^[0-9]*.?[0-9]+$/));
  //   // console.log(name, !!value.match(/^\d*.?\d+$/));
  //   console.log(name, !!value.match(/^\d+(\.\d+)?$/));

  //   if (name == 'principle') {
  //     setAmount(value);
  //     if (!!value.match(/^\d+(\.\d+)?$/)) {
  //       setinvalidPrinciple(false);
  //     } else {
  //       setinvalidPrinciple(true);
  //     }
  //   } else if (name == 'rate') {
  //     setRate(value);
  //     if (!!value.match(/^\d+(\.\d+)?$/)) {
  //       setinvalidRate(false);
  //     } else {
  //       setinvalidRate(true);
  //     }
  //   } else if (name == 'year') {
  //     setYear(value);
  //     if (!!value.match(/^\d+(\.\d+)?$/)) {
  //       setinvalidYear(false);
  //     } else {
  //       setinvalidYear(true);
  //     }
  //   }
  // }

  // const handleCalculate = (e) => {
  //   e.preventDefault();
  //   console.log("Button Clicked");
  //   if (amount && rate && year) {
  //     setInterest(amount * rate * year / 100);
  //   } else {
  //     alert("Please fill the form Completely")
  //   }
  // }

  // const handleReset = () => {
  //   setInterest(0);
  //   setAmount(0);
  //   setRate(0);
  //   setYear(0);
  //   setinvalidPrinciple(false);
  //   setinvalidRate(false);
  //   setinvalidYear(false)
  // }

  // const [age, setAge] = useState('Course');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const invalidPrincipleDiv = invalidPrinciple && <div className='text-danger mb-3'>*Invalid Principle Amount</div>
  // const invalidRateDiv = invalidRate && <div className='text-danger mb-3'>*Invalid Rate</div>
  // const invalidYearDiv = invalidYear && <div className='text-danger mb-3'>*Invalid Year</div>

  return (
    <>
      {/* <div style={{ width: '100%', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center bg-dark">
        <div className="bg-light p-5 rounded">
        <h1>Student Registration Form</h1>
        <h3>Please enter the details below</h3>
          <form action="" className='mt-5'>
            <div className="mb-3">
              <TextField name='Name' value={name || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle amount" variant="outlined" />
            </div>
            {invalidPrincipleDiv}
            <div className="mb-3">
              <TextField name='Address' value={address || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {invalidRateDiv}
            <div className="mb-3">
              <TextField name='Phone No' value={year 
                || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" />
            </div>
            {invalidYearDiv}
            <div className="mb-3">
              <TextField name='Email' value={year || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" />
            </div>
            {invalidYearDiv}
            <div className="gender">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
          </FormControl>
          <div>
            <input type="date" name="" id="" />
          </div> 
          <div>
            <InputLabel id="demo-simple-select-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Course"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
     
           </div>  
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} className="bg-dark" variant="contained" style={{ width: "50%", height: '70px' }}>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: '70px' }} className='border border-dark text-dark'>Reset</Button>
            </Stack>
            </div>
          </form>
        </div>
      </div> */}
      <HigherSecondaryAdmissionForm/>
    </>
  )
}

export default App
