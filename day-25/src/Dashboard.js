import React, {useContext} from 'react'
import { LoginUSer } from './App';
import { Alert } from 'react-bootstrap';

const Dashboard = () => {
    const user = useContext(LoginUSer);
    return(
        <>
        {user.login? 
            (<>
                <Alert variant="success">
                <Alert.Heading>DashBoard Section</Alert.Heading>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <hr />
                <p className="mb-0">
                    Sorry! Currently your Dashboard is empty.
                </p>
                </Alert>
            </>) : (
                <>
                <Alert variant="danger">
                    <Alert.Heading>Oh snap! You are not Logged in!</Alert.Heading>
                        <p>
                            Change this and that and try again. Duis mollis, est non commodo
                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Please Login to access your dashboard!
                        </p>
                </Alert>
                </>)
        }
        
        </>
    );
}

export default Dashboard
