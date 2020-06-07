import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderboardItem extends Component {
    render() {
        const {
            position,
            user,
            questionsCreated,
            questionsAnswered,
            points,
        } = this.props;

        return (
            <div className="card p-3">
                <p>Position: {position} </p>
                <div className="row">
                    <div className="col s4">
                        <img src={user.avatarURL} className="responsive-img"/>
                    </div>
                    <div className="col s8">
                        <p>User: {user.id}</p>
                        <p>Points: {points}</p>
                        <p>Questions created: {questionsCreated} </p>
                        <p>Questions Answered: {questionsAnswered}</p>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ users }, props) {
    const { id, position } = props;
    const user = users[id];
    const questionsCreated = (user.questions).length
    const questionsAnswered = (Object.keys(user.answers)).length
    const points = questionsCreated + questionsAnswered

    return {
        position,
        user,
        questionsCreated,
        questionsAnswered,
        points,
    }
}

export default connect(mapStateToProps)(LeaderboardItem);