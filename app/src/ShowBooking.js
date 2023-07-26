import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

const ShowBooking = () => {

  const [groups, setGroups] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/car/booking/${UserProfile.getCustomerId()}`)
      .then(response => response.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    setLoading(true);

    fetch(`/hotel/booking/${UserProfile.getCustomerId()}`)
      .then(response => response.json())
      .then(data => {
        setHotel(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/car/booking/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedGroups = [...groups].filter(i => i.id !== id);
      setGroups(updatedGroups);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const groupList = groups.map(group => {
    return <tr key={group.id}>
      <td style={{whiteSpace: 'nowrap'}}>{group.carType.model}</td>
      <td>{group.carType.location.cityName}</td>
      <td>{group.fromDate}</td>
      <td>{group.toDate}</td>
      <td>
        <ButtonGroup>
          {/* <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button> */}
          <Button size="sm" color="danger" onClick={() => remove(group.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  const hotelBookings = hotel.map(group => {
    return <tr key={group.id}>
      <td style={{whiteSpace: 'nowrap'}}>{group.hotel.name}</td>
      <td>{group.hotel.location.cityName}</td>
      <td>{group.roomType}</td>
      <td>{group.fromDate}</td>
      <td>{group.toDate}</td>
      <td>{group.hotel.noOfRooms}</td>
      <td>
        <ButtonGroup>
          {/* <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button> */}
          <Button size="sm" color="danger" onClick={() => remove(group.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/">Make More Booking</Button>
        </div>
        <h3>My Bookings</h3>
        <h4>Car Bookings</h4>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Car Type</th>
            <th width="20%">Location</th>
            <th>From</th>
            <th>To</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {groupList}
          </tbody>
        </Table>
        <br/>
        <br/>
        <h4>Hotel Bookings</h4>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Hotel Name</th>
            <th width="20%">Location</th>
            <th width="20%">Room Type</th>
            <th>From</th>
            <th>To</th>
            <th>No of Days</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {hotelBookings}
          </tbody>
        </Table>

      </Container>
    </div>
  );
};

export default ShowBooking;