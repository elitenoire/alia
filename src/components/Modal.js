import react from 'react'
import { Layer, Columns, Box, Button, Title, Paragraph, Icons, Header, Footer } from 'grommet'

const Modal = ({ onCancel, onDelete }) => {
    return (
        <Layer align="top" closer onClose={onCancel}>
            <Columns size="large" justify="center">
                <Box flex>
                    <Header flex separator="bottom">
                        <Title>Delete Snap</Title>
                    </Header>
                    <Box flex pad="medium">
                        <Icons.Base.Alert size="xlarge" colorIndex="neutral-1" type="logo"/>
                        <Paragraph size="xlarge" align="center" margin="medium">
                            Are you sure you want to delete this snap?
                        </Paragraph>
                    </Box>
                    <Footer flex separator="top" justify="center">
                        <Box direction="row" pad={{between : 'small'}}>
                            <Button label="Delete" type="button" onClick={onDelete} critical />
                            <Button label="Cancel" type="button" onClick={onCancel} accent />
                        </Box>
                    </Footer>
                </Box>
            </Columns>
        </Layer>
    )
}

export default Modal