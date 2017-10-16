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
        const { mode, cancelSnap, match : {params} } = this.props
        cancelSnap(formName, mode, params.id)
    }

    render() {
        return (
            <App>
                <Box flex full="horizontal">
                    <SnapForm
                        {...this.props}
                        onSubmit={this.onSubmit}
                        onCancel={this.onCancel}
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
    return {initialValues : snaps[ownProps.match.params.id]}
}

export default connect(
    mapStateToProps, { submitSnap, cancelSnap }
)(
    reduxForm(
        {form:formName, enableReinitialize : true, validate}
    )(
        SnapsNewView
    )
)

