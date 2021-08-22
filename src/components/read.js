import React, {useEffect, useState} from "react";
import {Table} from 'semantic-ui-react';
import axios from "axios";

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
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'checked' : 'unchecked'}</Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}