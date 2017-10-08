import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { App, Article, Heading, Section, Footer, Form, FormFields, TextInput } from 'grommet'
import grommetWrap from '../utils/grommet-wrap'
// import App from 'grommet/components/App'
// import Article from 'grommet/components/Article'
// import Heading from 'grommet/components/Heading'
// import Section from 'grommet/components/Section'
// import Footer from 'grommet/components/Footer'
// import Form from 'grommet/components/Form'
// import FormFields from 'grommet/components/FormFields'
// import TextInputWithFormField from 'redux-form-binding-grommet/src/TextInput'
// import TextInput from 'grommet/components/TextInput'

class SnapsNewView extends Component {
    // renderTitleField = ({ input }) => {
    //     return (
    //         <TextInput
    //         onDOMChange

    //         />
    //     )
    // }
    TextInputWithFormField = grommetWrap(TextInput)
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