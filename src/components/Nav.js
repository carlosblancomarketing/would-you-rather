import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    render() {
        return (

            <nav className="transparent black-text">
                <div className="nav-wrapper">
                    <NavLink to='/' exact activeClassName='active' className="brand-logo">
                        WYR
                    </NavLink>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/add' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>
                                Leaderboard
                            </NavLink>
                        </li>

                        {this.props.authedUser === null
                            ? <li>
                                <NavLink to='/login' activeClassName='active'>
                                    Login
                                </NavLink>
                            </li>
                            : <span><li>
                                <img src={this.props.user.avatarURL} width="20px" className="responsive-img" />
                                {this.props.user.id}
                            </li>

                                <li>
                                    <NavLink to='/logout' activeClassName='active'>
                                        Logout
                                    </NavLink>
                                </li>
                            </span>
                        }

                    </ul>
                </div>
                <hr />
            </nav>

        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const user = users[authedUser]

    return {
        authedUser,
        user
    }
}

export default withRouter(connect(mapStateToProps)(Nav));