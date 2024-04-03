import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
    <div className="navbar"> 
        <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        </div>
        <div className="user">
            {user && (
                <>
                    <p> {auth.currentUser?.displayName} </p>
                    <img src={user?.photoURL || ""} width="40" height="40"/>
                    <button onClick={signUserOut}> Log Out </button>
                </>
            )}
        </div>
    </div>
            
    );
} 