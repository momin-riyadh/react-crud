import React, {useEffect, useState} from "react";
import {Table, Button} from 'semantic-ui-react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Read() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://6121f7ecf5849d0017fb4334.mockapi.io/fakedata`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
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
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.emailAddress}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'checked' : 'unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button>Update</Button>
                                    </Table.Cell>
                                </Link>
                                    <Table.Cell>
                                        <Button>Delete</Button>
                                    </Table.Cell>

                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}