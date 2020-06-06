import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/shared'

class QuestionVote extends Component {
    state = {
        selectedOption: "",
    }

    handleChange = (e) => {
        const value = e.target.value;

        this.setState({
            selectedOption: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const answer = this.state.selectedOption;
        const { dispatch, id, authedUser } = this.props

        dispatch(handleSaveQuestionAnswer({
            authedUser,
            qid: id,
            answer
        }))

        this.setState({
            selectedOption: ""
        })
    }

    render() {
        const { author, question } = this.props;
        return (
            <div className="card p-3">
                <div className="row">
                    <div className="col s4">
                        <img src={author.avatarURL} className="responsive-img" />
                    </div>
                    <div className="col s8">
                        <p>{author.name} asks</p>
                        <p>Would you rather</p>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <label>
                                    <input
                                        name="QuestioVote"
                                        type="radio"
                                        value="optionOne"
                                        onChange={this.handleChange}
                                    />
                                    <span>{question.optionOne.text}</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        name="QuestioVote"
                                        type="radio"
                                        value="optionTwo"
                                        onChange={this.handleChange}
                                    />
                                    <span>{question.optionTwo.text}</span>
                                </label>
                            </p>
                            <button type="submit" className="waves-effect waves-light btn text-white">button</button>

                        </form>


                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props;
    const question = questions[id]
    const author = users[question.author]

    return {
        author,
        question,
        questions,
        authedUser,
    }
}

export default connect(mapStateToProps)(QuestionVote);