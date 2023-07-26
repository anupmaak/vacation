import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import UserProfile from './UserProfile';

const Login = () => {
  const initialFormState = {
    email: '',
    password: ''
  };
  const [customer, setCustomer] = useState(initialFormState);
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [loginSuccess, setLoginSuccess] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target

    setCustomer({ ...customer, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('/customer/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    }).then(response => response.json())
    .then(data => {
      UserProfile.setCustomerId(data.id)
      setLoginSuccess(data.loginSuccess)
      if(data.loginSuccess){
        navigate('/');

      }
    });
    setCustomer(initialFormState);
  }

  const title = <h2>Login</h2>;

  return (<div>
      {/* <AppNavbar/> */}
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
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
            <Button color="primary" type="submit">Login</Button>{' '}
            <Button color="secondary" tag={Link} to="/createAccount">Register</Button>
          </FormGroup>
          {!loginSuccess && <div className="error"> Invalid Credentails </div>}
        </Form>
      </Container>
    </div>
  )
};

export default Login;