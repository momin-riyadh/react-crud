import React, {useEffect, useState} from "react";
import {Table, Button} from 'semantic-ui-react';
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6121f7ecf5849d0017fb4334.mockapi.io/fakedata`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const updateData = (data) => {
        let {id, firstName, lastName, emailAddress, checkbox} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email Address', emailAddress);
        localStorage.setItem('Checkbox Value', checkbox);
    }

    const onDelete = (id) => {
        axios.delete(`https://6121f7ecf5849d0017fb4334.mockapi.io/fakedata/${id}`);
    }


    return (
        <div>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data, key) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.emailAddress}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'checked' : 'unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => updateData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}