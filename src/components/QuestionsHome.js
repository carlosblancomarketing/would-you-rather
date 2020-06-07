import React, { Component } from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import M from "materialize-css";



class QuestionsHome extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        const { answeredQuestions, unansweredQuestionsIds } = this.props;
        console.log('QuestionsHome: rendered');

        return (

            <div class="row">
                <div className="col s12 m8 offset-m2 mt-5">
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs">
                                <li class="tab col s6">
                                    <a class="active" href="#unanswered_questions">Unanswered Questions</a>
                                </li>
                                <li class="tab col s6">
                                    <a href="#answered_questions">Answered Questions</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col s12" id="unanswered_questions">
                            <QuestionList title="Unanswered Questions" questionsIds={unansweredQuestionsIds} />
                        </div>
                        <div className="col s12" id="answered_questions">
                            <QuestionList title="Answered Questions" questionsIds={answeredQuestions} />
                        </div>
                    </div>
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