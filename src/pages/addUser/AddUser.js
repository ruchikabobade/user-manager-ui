import {Box, Button, FormField, Heading, Select, Form, TextInput, Text} from "grommet";
import React from "react";
import axios from 'axios';

const AddUser = () => {
    const [value, setValue] = React.useState({});
    const [showSuccess, setShowSuccess] = React.useState(false)

    const handleSubmit = (value) => {
        console.log(value)
        const user = {
            username: value.username,
            fullName: value.fullName,
            emailAddress: value.emailAddress,
            role: value.role
        }
        console.log(user)
        axios.post(`http://localhost:8080/users`, user)
            .then(res => {
                setShowSuccess(true)
            })
    }

    return(
        <Box fill align="center" justify="center">
            <Box>
                <Heading level={2}> Add User </Heading>
            </Box>
            <Box width="medium">
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={({ value }) => {handleSubmit(value)}}
                >

                    <FormField label="Username" name="username" required>
                        <TextInput name="username"/>
                    </FormField>
                    <FormField label="Full Name" name="fullName" required>
                        <TextInput name="fullName"/>
                    </FormField>
                    <FormField label="Email Address" name="emailAddress" required>
                        <TextInput name="emailAddress" type="email"/>
                    </FormField>
                    <FormField label="Role" name="role" required>
                        <Select name="role" options={['level-1', 'level-2', 'level-3']} />
                    </FormField>
                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        <Button type="reset" label="Reset"/>
                        <Button type="submit" label="Submit"/>
                    </Box>
                </Form>
            </Box>

            {showSuccess && (
                <Box border={{ color: 'brand', size: 'medium' }} pad="medium" margin="medium">
                    <Text color="status-ok"> You have successfully added user. Check your email and verify to activate.</Text>
                </Box> )}

        </Box>
    )
}

export default AddUser
