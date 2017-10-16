import React, { Component } from 'react';
import { Field } from 'redux-form'
import TextArea from 'react-autosize-textarea'
import { Article, Header, Heading, Section, Footer, Box, Button, Form, FormFields, TextInput } from 'grommet'
import grommetWrap from '../utils/grommet-wrap'


export default SnapForm = (props) => {
    const { handleSubmit, onSubmit, onCancel, value, mode } = props
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Article>
                <Header>
                    <Heading>{`${mode[0].toUpperCase() + mode.slice(1)} Snap`}</Heading>
                </Header>
                <Section>
                    <FormFields>
                        <Field name="title" label="Title" id="title-1" placeholder="Snap Title"
                            value={ value.title || ''} component={TextInputWithFormField} />

                        <Field name="categories" label="Categories" id="tags-1" placeholder="Tags"
                            value={ value.categories || ''} component={TextInputWithFormField} />

                        <Field name="content" label="Content" id="content-1" rows={5}
                            value={ value.content || ''} component={TextAreaWithFormField} />
                    </FormFields>
                </Section>
                <Footer justify="end">
                    <Box direction="row" align="center" pad={{between : 'small'}}>
                        <Button label="Save" type="submit" accent />
                        <Button label="Cancel" type="button" onClick={onCancel} critical />
                    </Box>
                </Footer>
            </Article>
        </Form>
    )
}
const TextInputWithFormField = grommetWrap(TextInput)

const TextAreaWithFormField = grommetWrap(TextArea)


