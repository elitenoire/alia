import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { App, Box } from 'grommet'
import SnapForm from '../components/SnapForm'
import { submitSnap, cancelSnap } from '../actions'

class SnapsNewView extends Component {

    onSubmit = values => {
        const { mode, submitSnap, match : {params} } = this.props
        submitSnap(formName, values, mode, params.id)
    }

    onCancel = () => {
        this.props.cancelSnap(formName, this.props.mode)
    }

    render() {
        return (
            <App>
                <Box flex full="horizontal">
                    <SnapForm
                        {...this.props}
                        onSubmit={this.onSubmit}
                        onCancel={this.onCancel}
                        value={this.props.snap}
                    />
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
        mapStateToProps, { submitSnap, cancelSnap }
    )(
        SnapsNewView
    )
)