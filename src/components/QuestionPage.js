import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionResult from './QuestionResult';
import QuestionVote from './QuestionVote';

class QuestionPage extends Component {
    render() {
        const { id, voted } = this.props;
        return (
            <div className="row">
                <div className="col s12 m8 offset-m2 mt-5">
                    {voted === true
                        ? <QuestionResult id={id} />
                        : <QuestionVote id={id} />
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params;
    console.log(id)
    const voted = Object.keys(users[authedUser].answers).includes(id)

    return {
        id,
        voted,
    }
}

export default connect(mapStateToProps)(QuestionPage)