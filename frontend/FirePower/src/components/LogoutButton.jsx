import { useAuth0 } from '@auth0/auth0-react';
import "./Button.css"

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return ( 
        isAuthenticated && (        
            <button className="buttons logout-button" onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton