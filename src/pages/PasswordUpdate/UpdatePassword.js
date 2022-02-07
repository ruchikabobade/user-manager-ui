import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {Box, Button, FormField, Heading, Text, TextInput} from "grommet";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [match, setMatch] = React.useState(false)
    const message = "password doesnt match"

    const handleReset = () => {
        setPassword('')
        setConfirmPassword('')
    }

    const handleSubmit = () => {
        navigate('/users');
    }

    useEffect(
        () => {
            if(password !== '') {
                if(password === confirmPassword){
                    setMatch(false)
                } else {
                    setMatch(true)
                }
            }
        }, [password, confirmPassword]
    )

    return (

        <Box fill align="center" justify="center">
            <Box>
                <Heading level={2}> Login </Heading>
            </Box>
            <Box width="medium">
                <FormField label="Password" name="password" required>
                    <TextInput
                        name="password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </FormField>
                <FormField label="Confirm Password" name="confpassword" required>
                    <TextInput
                        name="confpassword"
                        type="password"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                    />
                </FormField>
                {match && (<Text color="status-critical">{message}</Text>)}
                <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                    <Button type="reset" label="Reset" onClick={handleReset}/>
                    <Button type="submit" label="Submit" primary onClick={handleSubmit}/>
                </Box>
            </Box>

        </Box>
    )
}

export default UpdatePassword
