import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';

class QuestionNew extends Component {
    state = {
        optionOneText: "",
        optionTwoText: "",
    }

    handleChange = (e) => {
        const text = e.target.value;
        const name = e.target.name

        this.setState((prevState) => ({
            ...prevState,
            [name]: text,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch, authedUser } = this.props;
        const { optionOneText, optionTwoText } = this.state;

        dispatch(handleAddQuestion({
            optionOneText,
            optionTwoText,
            authedUser,
        }));

        this.props.history.push('/');

    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 offset-m2 mt-5">
                    <h1>Create a new Question</h1>
                    <p>Would you rather</p>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="First option"
                            value={this.state.optionOneText}
                            name="optionOneText"
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            placeholder="Second option"
                            value={this.state.optionTwoText}
                            name="optionTwoText"
                            onChange={this.handleChange}
                        />

                        <button type="submit" className="waves-effect waves-light btn text-white">
                            Create Question
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProperties({ authedUser }) {
    return {
        authedUser,
    }
}

export default withRouter(connect(mapStateToProperties)(QuestionNew));