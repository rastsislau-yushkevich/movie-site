import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, signUp } from "../redux/action_creators/user_action_creator";
import { store } from "../redux/store";



const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = (e: any, setter: Function) => {
        setter(e.target.value);
    }

    const onSignUp = (e: any) => {
        e.preventDefault();
        dispatch(signUp({username: name, email: email, password: password}))
    }

    return(
        <div className="sign-page">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => handleInputChange(e, setName)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => handleInputChange(e, setPassword)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSignUp}>
                    Sign Up
                </Button>

                <Form.Text className="text-muted no-accaunt-text">
                    <p>Already have an account?<Link to="/signin">Sign In</Link></p>
                </Form.Text>

            </Form>
        </div>
    )
}

export { SignUp }