import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from "materialize-css";
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {

    state = {
        selectedUser: ""
    }

    componentDidMount() {
        M.AutoInit();

    }

    handleChange = (e) => {
        const option = e.target.value;

        this.setState({
            selectedUser: option
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        const { selectedUser } = this.state;

        dispatch(setAuthedUser(selectedUser));

        this.props.history.push('/');
    }

    render() {
        const { authedUser, users, userIDs } = this.props;
        const { selectedUser } = this.state;
        return (
            <div class="row">
                <div className="col s12 m8 offset-m2 mt-5">
                    <h1>Login</h1>
                    <div className="input-field col s12">
                        <form onSubmit={this.handleSubmit}>
                            <select onChange={this.handleChange}>
                                <option value="" disabled selected>Choose your user</option>
                                {userIDs.map((id) => (
                                    <option
                                        value={id}
                                    >{id}</option>
                                ))}
                            </select>
                            <button
                                type="submit"
                                disabled={selectedUser === ""}
                                className="waves-effect waves-light btn text-white">
                                Login
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProperties({ authedUser, users }) {
    const userIDs = Object.keys(users);

    return {
        authedUser,
        userIDs,
    }
}

export default connect(mapStateToProperties)(Login);