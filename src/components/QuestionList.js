import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

class QuestionsList extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                {this.props.questionsIds.map((questionId) => (
                    <QuestionItem questionId={questionId} key={questionId}/>
                ))}
            </div>
        )
    }
}

export default QuestionsList;