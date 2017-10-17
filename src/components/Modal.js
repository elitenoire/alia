import React from 'react'
import { Layer, Columns, Box, Button, Title, Paragraph, Icons, Header, Footer } from 'grommet'

const Modal = ({ onCancel, onDelete }) => {
    return (
        <Layer align="center" closer onClose={onCancel}>
            <Box justify="center" align="center" >
                <Box align="center" justify="center" pad="medium">
                    <Title>Delete Snap</Title>
                </Box>
                <Box separator="horizontal" pad="large" align="center">
                    <Icons.Base.Alert size="large" colorIndex="neutral-1" type="status"/>                     <Paragraph size="xlarge" align="center" margin="medium">
                        Are you sure you want to delete this snap?
                    </Paragraph>
                </Box>
                <Box align="center" justify="center" pad="medium">
                    <Box direction="row"  pad={{between : 'small'}}>
                        <Button label="Delete" type="button" onClick={onDelete} critical />
                        <Button label="Cancel" type="button" onClick={onCancel} accent />
                    </Box>
                </Box>
            </Box>
        </Layer>
    )
}

export default Modal