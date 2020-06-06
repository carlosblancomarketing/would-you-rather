import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer
} from './_DATA';

export function getInitialData() {

    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => {
        // console.log(users)
        // console.log(questions)
        return { users,questions}
    })



}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}