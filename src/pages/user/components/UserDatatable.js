import {DataTable, Box, Button} from "grommet";
import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import UserContext from "../../../context/UserContext";

const UserDatatable = () => {
    const [userData, setUserData] = React.useState([])
    const { role } = useContext(UserContext);
    const [deleteAllowed, setDeleteAllowed] = useState(false)

    const handleClick =(datum) => {
        console.log(datum)
        const url = "http://localhost:8080/users/" + datum.id
        axios.delete(url)
            .then(() => {
                axios.get(`http://localhost:8080/users`).then(response => setUserData(response.data))
            });
    }

    useEffect(() => {
        if(role) {
            const permissions = role.permissions
            if(permissions && permissions.includes("delete")){
                setDeleteAllowed(true)
            } else {
                setDeleteAllowed(false)
            }
        }
    })

    const deleteColm = {
        property: 'button',
        header: '',
        render: (datum) => (
            <Button label="delete" onClick={() => {handleClick(datum)}}/>
        )
    }

    let columns = [
        {
            property: 'id',
            header: 'ID'
        },
        {
            property: 'userName',
            header: 'User Name'
        },
        {
            property: 'fullName',
            header: 'Full Name'
        },
        {
            property: 'emailAddress',
            header: 'Email Address'
        },
        {
            property: 'status',
            header: 'Status'
        }
    ]



    if(deleteAllowed) {
        columns = [...columns, deleteColm]
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/users`).then(response => setUserData(response.data))
    },[])

    return (
        <Box>
            <DataTable
                columns={columns}
                data={userData}
                step={10}
                paginate
            />
        </Box>
    )
}

UserDatatable.prototypes = {

}

export { UserDatatable }
