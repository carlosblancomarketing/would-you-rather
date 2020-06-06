import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION_ANSWER } from '../actions/shared';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            const { qid, answer, authedUser} = action;
            
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }

        default:
            return state
    }
}