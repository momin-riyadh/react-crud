import React, {useState} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react';
import axios from "axios";


function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [emailAddress, setEmailAddress] = useState('')


    const postData = () => {
        axios.post(`https://6121f7ecf5849d0017fb4334.mockapi.io/fakedata`, {
            firstName,
            lastName,
            emailAddress,
            checkbox
        })
    }

    return <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Your Email' onChange={(e) => setEmailAddress(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>

    </Form>;

}

export default Create;