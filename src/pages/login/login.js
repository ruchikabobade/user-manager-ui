import {Box, Button, FormField, Form, Heading, TextInput, Text} from "grommet";
import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import UserContext from "../../context/UserContext";

const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState({});
    const [isError, setIsError] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const { fetchRole } = useContext(UserContext);

    const handleSubmit = (value) => {
        axios.post(`http://localhost:8080/login`, value)
            .then(res => {
                fetchRole(res.data)
                navigate('/users');
            }).catch(err => {
                setIsError(true)
                if(err.response) {
                    setErrMsg(err.response.data)
                }
            })
    }

    return (

        <Box fill align="center" justify="center">
            <Box>
                <Heading level={2}> Login </Heading>
            </Box>
            <Box width="medium">
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={({ value }) => {handleSubmit(value)}}
                >

                    <FormField label="Username" name="userName" required>
                        <TextInput
                            name="userName"
                            type="email"
                        />
                    </FormField>
                    <FormField label="Password" name="password" required>
                        <TextInput
                            name="password"
                            type="password"
                        />
                    </FormField>
                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset"/>
                        <Button type="submit" label="Submit"/>
                    </Box>
                </Form>
            </Box>

            {isError && (
                <Box width="medium" pad="small" margin="small" border={{ color: 'status-critical', size: 'medium' }} justify="center">
                    <Heading level={4} textAlign="center">Error Occurred!</Heading>
                    <Text textAlign="center">{errMsg}</Text>
                </Box>
            )}

        </Box>
    )
}

export default Login
