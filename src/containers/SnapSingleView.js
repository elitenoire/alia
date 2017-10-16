import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleSnap, deleteSnap, editSnap } from '../actions'
import { EDIT_SNAP_PATH } from '../constants'
import { App, Anchor, Header, Article, Animate, Heading, Headline, Menu, Paragraph, Label, Footer, Box, Button, Icons } from 'grommet'

const { Note, Edit, Tag, Trash, LinkPrevious } = Icons.Base

class SnapSingleView extends Component {
    componentWillMount(){
        const { id } = this.props.match.params
        this.props.getSingleSnap(id)
    }
    onEdit = () => { //TODO : decouple edit event from button, dispatch action instead
        const { id } = this.props.match.params
        // this.props.history.push(`${EDIT_SNAP_PATH}/${id}`)
        this.props.editSnap(id)
    }
    onDelete = () => {
        const { id } = this.props.match.params
        this.props.deleteSnap(id)
    }
    renderSnap = () => {
        const { isFetching, snap } = this.props
        return isFetching ? <Icons.Spinning size="xlarge"/>
                    : (
                        <Animate
                        enter={{"animation": "slide-left", "duration": 1000, "delay": 0}}
                        leave={{"animation": "slide-right", "duration": 1000, "delay": 0}}
                        >
                        <Box flex full="horizontal" align="center">
                            <Menu full="horizontal" direction="row" justify="between" inline responsive>
                                <Anchor icon={<LinkPrevious />} label="Back to Home" path="/"/>
                                <Box direction="row" pad={{between : 'small'}}>
                                    <Button icon={<Edit />} box colorIndex="neutral-1" onClick={this.onEdit} />
                                    <Button icon={<Trash />} box colorIndex="critical" onClick={this.onDelete} />
                                </Box>
                            </Menu>
                            <Box flex full="horizontal" align="center">
                                <Box basis="1/4" flex full="horizontal" colorIndex="neutral-2-a" margin="small" pad="small" align="center">
                                    <Headline size="medium">{snap.title}</Headline>
                                    <Anchor icon={<Tag />} label={<Label uppercase >{snap.categories}</Label>}disabled />                            
                                </Box>
                                <Box basis="3/4" flex full="horizontal" colorIndex="light-1" margin="medium" pad="large" align="center">
                                    <Note size="medium" colorIndex="neutral-1" type="logo"/>
                                    <Box flex full="horizontal" separator="all" margin="small" pad="medium">
                                        <Paragraph size="large" margin="medium" pad="medium">{snap.content}</Paragraph>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        </Animate>
                    )
    }
    render(){
        return (
            <App>
                <Article>
                    <Header>
                        <Heading>Snap by Alia</Heading>
                    </Header>
                    
                    <Box flex full="horizontal" align="center" colorIndex="light-2" pad="large">
                        {this.renderSnap()}
                    </Box>
                    
                    <Footer>Footer</Footer>
                </Article>
            </App>
        )
    }
}

const mapStateToProps = ({ snaps : {snaps, isFetching} }, ownProps) => {
    return {snap : snaps[ownProps.match.params.id], isFetching}
}

export default connect(mapStateToProps, { getSingleSnap, deleteSnap, editSnap })(SnapSingleView)