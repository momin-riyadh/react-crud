import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form} from "semantic-ui-react";
import axios from 'axios';

function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmailAddress(localStorage.getItem('Email Address'));
        setCheckbox(localStorage.getItem('Checkbox Value'));

    }, [])

    const updateAPIData = () => {
        axios.put(`https://6121f7ecf5849d0017fb4334.mockapi.io/fakedata/${id}`,{
            firstName,
            lastName,
            emailAddress,
            checkbox
        })
    }


    return (
        <div>
            <div>
                <Form className="create-form">
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Your Email' value={emailAddress}
                               onChange={(e) => setEmailAddress(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' checked={checkbox}
                                  onChange={(e) => setCheckbox(!checkbox)}/>
                    </Form.Field>
                    <Button type='submit' onClick={updateAPIData}>Update</Button>
                </Form>
            </div>
        </div>
    );
}

export default Update;
