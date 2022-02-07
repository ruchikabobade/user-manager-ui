import {UserDatatable} from "./components/UserDatatable";
import React from "react";
import {Box, Button, Heading, Header} from "grommet";
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/users/add-user');
    }
    return (
        <Box >
            <Header background="light-4" pad="medium" height="xsmall">
                <Heading level={2}> User DashBoard </Heading>
                <Box justify="end">
                    <Button label="add user" onClick={handleClick}/>
                </Box>
            </Header>
            <UserDatatable/>
        </Box>
    )
}

export default User
