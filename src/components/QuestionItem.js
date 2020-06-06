import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionItem extends Component {
    render() {
        const { author, question } = this.props;
        return (
            <div className="card p-3">
                <div className="row">
                    <div className="col s12">
                        <p>{author.name} asks</p>
                    </div>
                    <div className="col s4">
                        <img src={author.avatarURL} className="responsive-img" />
                    </div>
                    <div className="col s8">
                        <p>Would you rather</p>
                        <ul className="">
                            <li>{question.optionOne.text}</li>
                            <li>{question.optionTwo.text}</li>
                        </ul>
                        <Link to={`question/${question.id}`} className="waves-effect waves-light btn text-white">
                            View
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { questionId }) {
    return {
        author: users[questions[questionId].author],
        question: questions[questionId],
    }
}

export default connect(mapStateToProps)(QuestionItem);