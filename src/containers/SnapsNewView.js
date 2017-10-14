import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { App, Box } from 'grommet'
import SnapForm from '../components/SnapForm'
import { submitSnap, cancelCreateSnap } from '../actions'

class SnapsNewView extends Component {

    onSubmit = values => {
        const { mode, submitSnap } = this.props
        this.props.submitSnap(values, mode)
    }

    onCancel = () => {
        this.props.cancelCreateSnap(formName, '/')
    }

    render() {
        return (
            <App>
                <Box>
                    <SnapForm {
                        ...this.props, onSubmit={onSubmit}, onCancel={this.onCancel}, value={this.props.snap}
                    } />
                </Box>
            </App>
        );
    }
}

const formName = 'NewSnapForm'

const validate = values => {
    const required = ['title', 'categories', 'content']
    return required.reduce((errors, field) => {
        if (!values[field]) {
            // errors[field] = `${field[0].toUpperCase() + field.slice(1)} must not be empty.`
            errors[field] = 'Required'
        }
        return errors
    }, {})
}

const mapStateToProps = ({ snaps : { snaps } }, ownProps) => {
    return {snap : snaps[ownProps.match.params.id]}
}

export default reduxForm(
    {form:formName, validate}
)(
    connect(
        mapStateToProps, { submitSnap, cancelCreateSnap }
    )(
        SnapsNewView
    )
)