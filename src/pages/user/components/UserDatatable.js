import {DataTable, Box, Button} from "grommet";
import React, {useEffect} from "react";
import axios from 'axios';



const UserDatatable = () => {
    const [userData, setUserData] = React.useState([])

    const handleClick =(datum) => {
        console.log(datum)
        const url = "http://localhost:8080/users/" + datum.id
        axios.delete(url)
            .then(() => {
                axios.get(`http://localhost:8080/users`).then(response => setUserData(response.data))
            });
    }

    const columns = [
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
        },
        {
            property: 'button',
            header: '',
            render: (datum) => (
                <Button label="delete" onClick={() => {handleClick(datum)}}/>
            )
        }

    ]



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
