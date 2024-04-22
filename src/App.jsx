import { useState ,useEffect} from "react";
import Button from "react-bootstrap/Button";
import { TextField } from "@mui/material";
import "./App.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Modal from "react-bootstrap/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";



function App() {
  const [fullName, setfullName] = useState("");
  const [address, setaddress] = useState("");
  const [mobNum, setmobNum] = useState("");
  const [emailId, setemailId] = useState("");

  const [isFullnameInvalid, setIsFullnameInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isMobileNumberInvalid, setIsmobileNumberInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleInputValidationforname = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[A-Za-z\s.]*$/));
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(false);
      }
    } else {
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(true);
      }
    }
  };

  const handleInputValidationforaddress = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[A-Za-z\d\s,]*$/));
    if (!!value.match(/^[A-Za-z\d\s,()]*$/)) {
      if (name == "address") {
        setaddress(value);
        setIsAddressInvalid(false);
      }
    } else {
      if (name == "address") {
        setaddress(value);
        setIsAddressInvalid(true);
      }
    }
  };
  const handleInputValidationfornumber = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^\d{10,}$/));
    if (!!value.match(/^\d{10,}$/)) {
      if (name == "mobNum") {
        setmobNum(value);
        setIsmobileNumberInvalid(false);
      }
    } else {
      if (name == "mobNum") {
        setmobNum(value);
        setIsmobileNumberInvalid(true);
      }
    }
  };
  const handleInputValidationformail = (tag) => {
    const { name, value } = tag;
    console.log(!!value.match(/^[a-z\d\@.]*$/));
    if (!!value.match(/^[a-z\d\@.]*$/)) {
      if (name == "emailId") {
        setemailId(value);
        setIsEmailInvalid(false);
      }
    } else {
      if (name == "emailId") {
        setemailId(value);
        setIsEmailInvalid(true);
      }
    }
  };
  const [selectedDate, setSelectedDate] = useState(null); 

  const handleDateChange = (date) => {
    setSelectedDate(date); 
  };
  const [gender, setGender] = useState(""); 

  const handleGenderChange = (event) => {
    setGender(event.target.value); 
  };
  const [Course, setCourse] = useState("");
  const handleCourseChange = (event) => {
    setCourse(event.target.value); 
  };

  const isFormIncomplete = !gender || !selectedDate || !Course;

  const DetailsUpload = () => {
    alert("Uploaded Successfully");
  };
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleReset = () => {
    setCourse("");
    setGender("");
    setSelectedDate(null);
    setfullName("");
    setIsFullnameInvalid(false);
    setaddress("");
    setIsAddressInvalid(false);
    setmobNum("");
    setIsmobileNumberInvalid(false);
    setemailId("");
    setIsEmailInvalid(false);
  };

  return (
    <div className="page">
      <div className="main-container" style={{backgroundColor:'#fff'}}>
        <img style={{width:'160px',paddingTop:'30px',paddingLeft:'20px'}}  alt="" />
        <h4 className="text-center mb-4 mt-3" style={{ color:"black"}}>STUDENT ADMISSION FORM</h4>
        <div className="container">
          <div className="container-items">
            <div>
              <TextField
                inputProps={{ }}
                name="fullName"
                value={fullName}
                onChange={(e) => handleInputValidationforname(e.target)}
                className="w-100 mt-4"
                id="fullname"
                label="Full Name"
                variant="outlined"
              />
            </div>
            {isFullnameInvalid && (
              <div className=" text-danger mt-2 ">Invalid Name</div>
            )}
            <div>
              <TextField
                name="address"
                value={address}
                onChange={(e) => handleInputValidationforaddress(e.target)}
                className="w-100 mt-5"
                id="Address"
                label="Address"
                variant="outlined"
              />
            </div>
            {isAddressInvalid && (
              <div className=" text-danger  mt-2 ">Invalid Address</div>
            )}
            <div>
              <TextField
                name="emailId"
                value={emailId}
                onChange={(e) => handleInputValidationformail(e.target)}
                className="w-100 mt-5"
                id="email"
                label="Email"
                variant="outlined"
              />
            </div>
            {isEmailInvalid && (
              <div className=" text-danger  mt-2">Invalid Email</div>
            )}
            <div>
              <TextField
                name="mobNum"
                value={mobNum}
                onChange={(e) => handleInputValidationfornumber(e.target)}
                className="w-100 mt-5"
                id="mobile"
                label="Mobile"
                variant="outlined"
              />
            </div>
            {isMobileNumberInvalid && (
              <div className=" text-danger  mt-2 ">
                Invalid Mobile Number
              </div>
            )}
            
          </div>
          <div className="container-items">
           
            <div>
              <h6 className="mt-3">Date of Birth</h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className=" w-100"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(props) => <input {...props} readOnly />}
                />
              </LocalizationProvider>
            </div>
            
            <div className="mt-4">
              <FormControl className="w-100 ">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Course
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={Course}
                  onChange={handleCourseChange}
                  autoWidth
                  label="Course"
                >
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={21}>Humanities</MenuItem>
                  <MenuItem value={22}>Commerce</MenuItem>
                  <MenuItem value={22}>Computer Science</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mt-3">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className="mb-4 text-dark"
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            
            <div className="mt-4">
              <button
                disabled={
                  isAddressInvalid ||
                  isEmailInvalid ||
                  isFullnameInvalid ||
                  isMobileNumberInvalid ||
                  isFormIncomplete
                }
                type="submit"
                onClick={handleShow}
                className="btn btn-success me-2 w-100 mb-2"
              >
                Submit
              </button>
              <button
                onClick={handleReset}
                className="btn btn-primary border-dark mt-2 w-100"
              >
                Reset
              </button>
            </div>
          
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Please confirm details </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="Details">
                  <div className="Heading">
                    <h5 className="fullname">Full Name</h5>
                    <h5 className="fullname">Address</h5>
                    <h5 className="fullname">Mobile</h5>
                    <h5 className="fullname">Email</h5>
                    <h5 className="fullname">Date of Birth</h5>
                    <h5 className="fullname">Gender</h5>
                    <h5 className="fullname">Course</h5>
                  </div>
                  <div className="fillers">
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {fullName}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {address}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {mobNum}
                    </h6>
                    <h6 className="ps-3 content">{emailId}</h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {selectedDate ? selectedDate.format("DD-MM-YYYY") : ""}{" "}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {gender}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {Course === 20
                        ? "Biology"
                        : Course === 21
                        ? "Humanities"
                        : Course === 22
                        ? "Commerce"
                        : Course===23
                        ?"Computer Science"
                      :"" }
                    </h6>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    handleClose();
                    handleReset();
                    DetailsUpload();
                  }}
                  variant="primary"
                >
                  Upload
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;