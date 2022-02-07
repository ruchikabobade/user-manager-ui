import React, {useState} from 'react'

const UserContext = React.createContext({
    role: {},
    fetchRole: (role) => console.log("implement this")
})

const UserContextProvider = ({children}) => {
    const [role, setRole] = useState({})

    const fetchRole = (role) => {
        setRole(role)
    }

    return (
        <UserContext.Provider value={{
        role, fetchRole
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
export {UserContextProvider}
