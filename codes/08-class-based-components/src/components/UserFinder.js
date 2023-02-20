import {Fragment, useState, useEffect, Component} from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from "../store/users-context";

class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        // SEND HTTP REQ
        this.setState({filteredUsers: this.context.users})
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
                </div>
                <Users users={this.state.filteredUsers}/>
            </Fragment>
        );
    }

}


// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);
//
//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };
//
//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;