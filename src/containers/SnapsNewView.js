import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { App, Article, Heading, Section, Footer, Form, FormFields, TextInput } from 'grommet'
import grommetWrap from '../utils/grommet-wrap'
import TextArea from 'react-textarea-autosize'
// import TextInputWithFormField from 'redux-form-binding-grommet/src/TextInput'

class SnapsNewView extends Component {
    // renderTitleField = ({ input }) => {
    //     return (
    //         <TextInput
    //         onDOMChange

    //         />
    //     )
    // }
    TextInputWithFormField = grommetWrap(TextInput)
    TextAreaWithFormField = grommetWrap(TextArea)
    render() {
        return (
            <App>
                <Form>
                    <Article>
                        <Heading>Snaps View New</Heading>
                        <Section>
                            <FormFields>
                                <Field name="title" label="Title" id="title-1" placeholder="Snap Title"
                                    component={this.TextInputWithFormField} />

                                <Field name="tags" label="Categories" id="tags-1" placeholder="Tags"
                                    component={this.TextInputWithFormField} />

                                <Field name="content" label="Content" id="content-1" minRows={5}
                                    component={this.TextAreaWithFormField} />


                            </FormFields>
                        </Section>
                        <Footer></Footer>
                    </Article>
                </Form>
            </App>
        );
    }
}

export default reduxForm({form:'NewSnapForm'})(SnapsNewView)