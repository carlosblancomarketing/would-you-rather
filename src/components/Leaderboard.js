import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';

class Leaderboard extends Component {
    render() {
        const { sortedUserIds } = this.props;

        return (
            <div class="row">
                <div className="col s12 m8 offset-m2 mt-5">
                    {sortedUserIds.map((id, index) => (
                        <LeaderboardItem id={id} key={id} position={index + 1} />
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const sortedUserIds = Object.keys(users)
        .sort((a, b) => {
            const aPoints = (Object.keys(users[a].answers)).length + users[a].questions.length
            const bPoints = (Object.keys(users[b].answers)).length + users[b].questions.length
            return bPoints - aPoints
        })

    return {
        sortedUserIds
    }
}

export default connect(mapStateToProps)(Leaderboard);