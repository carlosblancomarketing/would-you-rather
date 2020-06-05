import React, { Component } from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';


class QuestionsHome extends Component {

    render() {
        const { answeredQuestions, unansweredQuestionsIds } = this.props;
        console.log('QuestionsHome: rendered');

        return (
            <div className="row">
                <div className="col s12 m6">
                    <QuestionList title="Unanswered Questions" questionsIds={unansweredQuestionsIds} />
                </div>
                <div className="col s12 m6">
                    <QuestionList title="Answered Questions" questionsIds={answeredQuestions} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    var questionIDs = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const answeredQuestionsIds = Object.keys(users[authedUser].answers);
    const unansweredQuestionsIds = questionIDs.filter((question_id) => {
        return !answeredQuestionsIds.includes(question_id)
    });
    // answeredQuestionsIds = answeredQuestionsIds['answers'];

    return {
        answeredQuestions: answeredQuestionsIds,
        unansweredQuestionsIds: unansweredQuestionsIds,
    }
}

export default connect(mapStateToProps)(QuestionsHome)