import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import TextArea from 'react-autosize-textarea'
import { App, Article, Header, Heading, Section, Footer, Box, Button, Form, FormFields, TextInput } from 'grommet'
import grommetWrap from '../utils/grommet-wrap'
import { submitSnap, cancelCreateSnap } from '../actions'

class SnapsNewView extends Component {
    TextInputWithFormField = grommetWrap(TextInput)

    TextAreaWithFormField = grommetWrap(TextArea)

    onSubmit = values => {
        this.props.submitSnap(values, formName)
    }

    onCancel = () => {
        this.props.cancelCreateSnap(formName, '/')
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <App>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Article>
                        <Header>
                            <Heading>Snaps View New</Heading>
                        </Header>
                        <Section>
                            <FormFields>
                                <Field name="title" label="Title" id="title-1" placeholder="Snap Title"
                                    component={this.TextInputWithFormField} />

                                <Field name="categories" label="Categories" id="tags-1" placeholder="Tags"
                                    component={this.TextInputWithFormField} />

                                <Field name="content" label="Content" id="content-1" rows={5}
                                    component={this.TextAreaWithFormField} />
                            </FormFields>
                        </Section>
                        <Footer justify="end">
                            <Box direction="row" align="center" pad={{between : 'small'}}>
                                <Button label="Save" type="submit" accent />
                                <Button label="Cancel" type="button" onClick={this.onCancel} critical />
                            </Box>
                        </Footer>
                    </Article>
                </Form>
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

export default reduxForm({form:formName, validate})(connect(null, { submitSnap, cancelCreateSnap })(SnapsNewView))