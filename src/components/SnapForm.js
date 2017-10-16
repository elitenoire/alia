import React from 'react';
import { Field } from 'redux-form'
import TextArea from 'react-autosize-textarea'
import { Article, Header, Heading, Section, Footer, Box, Button, Form, FormFields, TextInput } from 'grommet'
import grommetWrap from '../utils/grommet-wrap'


const SnapForm = (props) => {
    const { handleSubmit, onSubmit, onCancel, mode } = props
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Article>
                <Header>
                    <Heading>{`${mode[0].toUpperCase() + mode.slice(1)} Snap`}</Heading>
                </Header>
                <Section>
                    <FormFields>
                        <Field name="title" label="Title" id="title-1" placeholder="Snap Title"
                            component={TextInputWithFormField} />

                        <Field name="categories" label="Categories" id="tags-1" placeholder="Tags"
                            component={TextInputWithFormField} />

                        <Field name="content" label="Content" id="content-1" rows={5}
                            component={TextAreaWithFormField} />
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

export default SnapForm


