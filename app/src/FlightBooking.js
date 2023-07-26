import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table, Form, FormGroup, Input, Label  } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserProfile from './UserProfile';


const FlightBooking = () => {

  const [groups, setGroups] = useState([]);
  const [tripType, setTripType] = useState('round');
  const [location, setLocation] = useState([]);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const initialFormState = {
    customerId: '',
    origination: '',
    destination: '',
    roomType: '',
    location: '',
    fromDate: '',
    toDate: ''
  };
  const [booking, setBooking] = useState(initialFormState);

  useEffect(() => {
    fetch('hotel')
      .then(response => response.json())
      .then(data => {
        setGroups(data);
      })
  }, []);

  useEffect(() => {
    fetch('location')
      .then(response => response.json())
      .then(data => {
        setLocation(data);
      })
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    booking.fromDate = startDate
    booking.toDate = toDate
    booking.customerId = UserProfile.getCustomerId()
    await fetch('hotel/booking', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    navigate('/showBooking');
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setBooking({ ...booking, [name]: value })
  }
  const setTrip = (event) => {
    const { name, value } = event.target
    setTripType(value)
  }



  return (<div>
    {/* <AppNavbar/> */}
    <Container>
    <h2>Make your Flight Bookings</h2>
      <Form onSubmit={handleSubmit}>
        <div lassName="row">
        <FormGroup className="col-md-4 mb-3">
              <Input type="radio" name="hotel" id="round" value ="round"
                     onChange={setTrip} autoComplete="address-level1"/> Round 
              <Input type="radio" name="hotel" id="oneWay" value ="oneway"
                     onChange={setTrip} autoComplete="address-level1"/> One Way 
            </FormGroup>
        </div>
      <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="origination">Origination</Label>
              <Input type="select" name="origination" id="origination"
                     onChange={handleChange} autoComplete="address-level1">
                      <option value="0">---select----</option>
                      {location.map(group =>
                      <option value={group.id}>{group.cityName}</option>
                     )}
              </Input>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="destination">Destination</Label>
              <Input type="select" name="destination" id="destination"
                     onChange={handleChange} autoComplete="address-level1">
                      <option value="0">---select----</option>
                      {location.map(group =>
                      <option value={group.id}>{group.cityName}</option>
                     )}
              </Input>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="roomType">No of Passenger</Label>
              <Input type="number" name="noOfRooms" id="noOfRooms"
                     onChange={handleChange} autoComplete="address-level1">
              </Input>
            </FormGroup>
            </div>
            <div className="row">
            <FormGroup className="col-md-3 mb-3">
              <Label for="startDate">Start Date</Label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </FormGroup>
            {tripType == "round" && <FormGroup className="col-md-3 mb-3">
              <Label for="toDate">Return Date</Label>
              <DatePicker selected={toDate} onChange={(date) => setToDate(date)} />
            </FormGroup>}
            </div>
          
        <FormGroup>
          <Button color="primary" type="submit">Make Booking</Button>{' '}
          <Button color="secondary" tag={Link} to="/">Cancel</Button>
        </FormGroup>
      </Form>
    </Container>
  </div>
)
};

export default FlightBooking;