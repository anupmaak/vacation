import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import UserProfile from './UserProfile';

const Register = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  const [customer, setCustomer] = useState(initialFormState);
  const navigate = useNavigate();
  const [id, setId] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target

    setCustomer({ ...customer, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('/customer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    }).then(response => response.json())
    .then(data => {
      UserProfile.setCustomerId(data.id)
    });
    setCustomer(initialFormState);
    navigate('/');
  }

  const title = <h2>Create Account</h2>;

  return (<div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName"
                   onChange={handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" value={customer.lastName || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={customer.email || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={customer.password || ''}
                     onChange={handleChange} autoComplete="address-level1"/>
            </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Create</Button>{' '}
            <Button color="secondary" tag={Link} to="/">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};

export default Register;