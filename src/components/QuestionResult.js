import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionResult extends Component {
    render() {
        const {
            author,
            question,
            optionOneTotal,
            optionTwoTotal,
            totalAnswers,
            optionOnePercentage,
            optionTwoPercentage,
            optionOneSelected,
            optionTwoSelected } = this.props;
        return (
            <div>
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
                            <p>Asked By {question.author}</p>



                            <div className={optionOneSelected ? 'option selected' : 'option'}>
                                <p>
                                    {optionOneSelected
                                        ? <i className="material-icons mr-2">check_circle</i>
                                        : <i className="material-icons mr-2">panorama_fish_eye</i>
                                    }

                                    {question.optionOne.text}
                                </p>
                                <p>{optionOneTotal} out of {totalAnswers} votes ({optionOnePercentage}%)</p>
                                <div className="progress">
                                    <div className="determinate" style={{ width: `${optionOnePercentage}%` }}></div>
                                </div>
                            </div>

                            <div className={optionTwoSelected ? 'option selected' : 'option'}>
                                <p>
                                    {optionTwoSelected
                                        ? <i className="material-icons mr-2">check_circle</i>
                                        : <i className="material-icons mr-2">panorama_fish_eye</i>
                                    }
                                    {question.optionTwo.text}
                                </p>
                                <p>{optionTwoTotal} out of {totalAnswers} votes ({optionTwoPercentage}%)</p>
                                <div className="progress">
                                    <div className="determinate" style={{ width: `${optionTwoPercentage}%` }}></div>
                                </div>
                            </div>



                        </div>
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
    const optionOneTotal = question.optionOne.votes.length
    const optionTwoTotal = question.optionTwo.votes.length
    const totalAnswers = optionOneTotal + optionTwoTotal
    const optionOnePercentage = (optionOneTotal * 100 / totalAnswers).toFixed(2)
    const optionTwoPercentage = (optionTwoTotal * 100 / totalAnswers).toFixed(2)
    const optionOneSelected = question.optionOne.votes.includes(authedUser)
    const optionTwoSelected = question.optionTwo.votes.includes(authedUser)


    return {
        question,
        author,
        optionOneTotal,
        optionTwoTotal,
        totalAnswers,
        optionOnePercentage,
        optionTwoPercentage,
        optionOneSelected,
        optionTwoSelected
    }
}

export default connect(mapStateToProps)(QuestionResult)