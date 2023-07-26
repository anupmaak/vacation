import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table, Form, FormGroup, Input, Label  } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserProfile from './UserProfile';


const HotelBooking = () => {

  const [groups, setGroups] = useState([]);
  const [location, setLocation] = useState([]);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const initialFormState = {
    customerId: '',
    hotel: '',
    noOfRooms: '',
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



  return (<div>
    {/* <AppNavbar/> */}
    <Container>
    <h2>Make your Hotel Bookings</h2>
      <Form onSubmit={handleSubmit}>
      <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="hotel">Hotel</Label>
              <Input type="select" name="hotel" id="hotel"
                     onChange={handleChange} autoComplete="address-level1">
                      <option value="0">---select----</option>
                      {groups.map(group =>
                      <option value={group.id}>{group.name}</option>
                     )}
              </Input>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="roomType">Room Type</Label>
              <Input type="select" name="roomType" id="roomType"
                     onChange={handleChange} autoComplete="address-level1">
                      <option value="0">---select----</option>
                      <option value="king">One King Bed</option>
                      <option value="twoQueen">Two Queen Bed</option>
                      <option value="suite">Suite</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="roomType">No of Rooms</Label>
              <Input type="number" name="noOfRooms" id="noOfRooms"
                     onChange={handleChange} autoComplete="address-level1">
              </Input>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="location">Location</Label>
              <Input type="select" name="location" id="location"
                     onChange={handleChange} autoComplete="address-level1">
                      <option value="0">---select----</option>
                      {location.map(group =>
                      <option value={group.id}>{group.cityName}</option>
                     )}
              </Input>
            </FormGroup>
            </div>
            <div className="row">
            <FormGroup className="col-md-3 mb-3">
              <Label for="startDate">From Date</Label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="toDate">To Date</Label>
              <DatePicker selected={toDate} onChange={(date) => setToDate(date)} />
            </FormGroup>
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

export default HotelBooking;