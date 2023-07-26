import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import UserProfile from './UserProfile';
import CarBooking from './CarBooking';
import Login from './Login';
import HotelBooking from './HotelBooking';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlightBooking from './FlightBooking';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        {(UserProfile.getCustomerId() == null || UserProfile.getCustomerId() == 0 ) &&
        <Login/>
        }
         {(UserProfile.getCustomerId() != null &&UserProfile.getCustomerId() != 0)  &&
         <div>
            <Tabs>
            <TabList>
            <Tab>Book Car</Tab>
            <Tab>Book Hotels</Tab> 
            <Tab>Book Flight</Tab> 
            </TabList>

            <TabPanel>
                <CarBooking/> 
            </TabPanel>
            <TabPanel>
                <HotelBooking/>
            </TabPanel>
            <TabPanel>
                <FlightBooking/>
            </TabPanel>
            </Tabs>
        </div>
        }
        
      </Container>
    </div>
  );
}

export default Home;