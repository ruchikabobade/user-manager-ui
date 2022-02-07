import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {Box, Button, Form, FormField, Heading, Text, TextInput} from "grommet";
import {useParams} from "react-router";
import axios from "axios";

const UpdatePassword = () => {
    const [value, setValue] = React.useState({});
    const navigate = useNavigate();
    const params = useParams();
    const [showLogin, setShowLogin] = React.useState(false)

    const handleSubmit = (value) => {
        const input = {
            id: params.id,
            password: value.password
        }

        axios.post(`http://localhost:8080/update`, input)
            .then(res => {
               setShowLogin(true)
            }).catch(err => {
        })
    }

    const handleClick = () => {
        navigate('/')
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
                    <FormField label="Password" name="password" required>
                        <TextInput name="password" type="password"/>
                    </FormField>

                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset" />
                        <Button type="submit" label="Submit" primary/>
                    </Box>

                </Form>
            </Box>

            {showLogin && (
                <Box direction="row" justify="center" width="medium">
                    <Text> Your password has been successfully updated. Click to login </Text>
                    <Button label="login" primary onClick={() => {handleClick()}}/>
                </Box>)}
        </Box>
    )
}

export default UpdatePassword;
