import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from "../../store/auth-context";

const Navigation = () => {

    // We have to use useContext() hook to get the context value
    const ctx = useContext(AuthContext);

    // We have too way to get the context value. The first way is to use useContext() hook
    // and the second way is to use Consumer component
    return (
        // <AuthContext.Consumer>
        //     {(ctx) => {
        //         return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
        //         )
        //     }
        //     }
        //
        // </AuthContext.Consumer>
    );
};

export default Navigation;
