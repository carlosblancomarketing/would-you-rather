import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsItem extends Component {
    render() {
        const { user, question } = this.props;
        return (
            <div className="card p-3">
                <div className="row">
                    <div className="col s12">
                        <p>{user.name} asks</p>
                    </div>
                    <div className="col s4">
                        <img src={user.avatarURL} className="responsive-img" />
                    </div>
                    <div className="col s8">
                        <p>Would you rather</p>
                        <ul className="">
                            <li>{question.optionOne.text}</li>
                            <li>{question.optionTwo.text}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { questionId }) {
    return {
        user: users[questions[questionId].author],
        question: questions[questionId],
    }
}

export default connect(mapStateToProps)(QuestionsItem);