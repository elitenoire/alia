import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSnaps } from '../actions'
// import { Link } from 'react-router-dom'
import { App, Title, Box, Card, Header, Footer, Label, Tiles, Tile, Anchor, Icons} from 'grommet'

class SnapsView extends Component {
    componentDidMount(){
        this.props.getSnaps()
    }

    onSelectSnap(id){
        this.props.history.push(`/snaps/${id}`)
    }

    renderSnaps = (snaps) => {
        return Object.keys(snaps).reduce((list,id) => {
            list.push(
                <Tile key={id} onClick={this.onSelectSnap.bind(this, id)}>
                    <Card label={snaps[id].categories}
                    heading={snaps[id].title}
                    contentPad="small"
                    />
                </Tile>
            )
            return list
        }, [])
    }
    render() {
        return (
            <App >
                <Header direction="row" justify="between" size="large"
                pad={{ horizontal: 'medium' }}>
                    <Title>SnapsView</Title>
                </Header>
                <Box pad="large">
                    <Box direction="row" align="center" justify="center">
                        <Anchor
                        icon={<Icons.Pulse />}
                        path="/snaps/new"
                        />
                        <Label>New Snap</Label>
                    </Box>
                    <Tiles fill selectable >
                        {this.renderSnaps(this.props.snaps)}
                    </Tiles>
                </Box>
                <Footer></Footer>
            </App>
        );
    }
}

export default connect(({snaps : {snaps}})=>({snaps}), { getSnaps })(SnapsView)