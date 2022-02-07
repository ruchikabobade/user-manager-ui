import {Box, Button, FormField, Form, Heading, TextInput} from "grommet";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState({});

    const handleSubmit = (value) => {
        navigate('/users');
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

                    <FormField label="Username" name="username" required>
                        <TextInput
                            name="username"
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

        </Box>
    )
}

export default Login
