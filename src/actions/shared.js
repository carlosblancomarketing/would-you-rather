import { 
    getInitialData,
    saveQuestionAnswer } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';


const USER_ID = "johndoe"
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';


export function handleInitialData() {
    return (dispatch) => {
        // dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                // dispatch(setAuthedUser(USER_ID))
                // dispatch(hideLoading());
            })
    }
}


function addQuestionAnswer({authedUser, qid, answer}) {

    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer(data) {
    return (dispatch => {
        return saveQuestionAnswer(data)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e)
            })
            .then(dispatch(addQuestionAnswer(data)))
    })
}

