import {UserDatatable} from "./components/UserDatatable";
import React, {useContext, useEffect, useState} from "react";
import {Box, Button, Heading, Header} from "grommet";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/UserContext";

const User = () => {
    const navigate = useNavigate();
    const { role } = useContext(UserContext);
    const [createAllowed, setCreateAllowed] = useState(false)

    useEffect(() => {
        if(role) {
            const permissions = role.permissions
            if(permissions && permissions.includes("create")){
                setCreateAllowed(true)
            } else {
                setCreateAllowed(false)
            }
        }
    })

    const handleClick = () => {
        navigate('/users/add-user');
    }

    return (
        <Box >
            <Header background="light-4" pad="medium" height="xsmall">
                <Heading level={2}> User DashBoard </Heading>
                {createAllowed && (<Box justify="end">
                    <Button label="add user" onClick={handleClick}/>
                </Box>)}
            </Header>
            <UserDatatable/>
        </Box>
    )
}

export default User
