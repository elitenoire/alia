import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSnaps } from '../actions'
import { Link } from 'react-router-dom'
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Header from 'grommet/components/Header'
import Footer from 'grommet/components/Footer'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Pulse from 'grommet/components/icons/Pulse'
import Add from 'grommet/components/icons/base/Add'
import Anchor from 'grommet/components/Anchor'

class SnapsView extends Component {
    componentWillMount(){
        console.log('Fetching snaps..')
        this.props.getSnaps()
    }

    renderSnaps = (snaps) => {
        return Object.keys(snaps).reduce((list,id) => {
            list.push(
                <Tile key={id}>
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
        console.log(this.props.snaps)
        return (
            <App >
                <Header direction="row" justify="between" size="large"
                pad={{ horizontal: 'medium' }}>
                    <Title>SnapsView</Title>
                </Header>
                <Box pad="small">
                    <Box align="center">
                        <Anchor
                        align="end"
                        label="Add a Snap"
                        icon={<Pulse icon={<Add />} />}
                        path="/snaps/new"
                        />
                    </Box>
                    <Tiles fill selectable onSelect={()=>console.log('selected!')}>
                        {this.renderSnaps(this.props.snaps)}
                    </Tiles>
                </Box>
                <Footer></Footer>
            </App>
        );
    }
}

export default connect(({snaps : {snaps}})=>({snaps}), { getSnaps })(SnapsView)