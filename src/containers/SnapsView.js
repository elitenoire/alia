import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSnaps, selectSnap, addSnap } from '../actions'
import { App, Title, Box, Card, Header, Footer, Label, Tiles, Tile, Anchor, Icons} from 'grommet'

class SnapsView extends Component {
    componentDidMount(){
        this.props.getSnaps()
    }

    onSelectSnap(snap, color){
        this.props.selectSnap(snap, color)
    }

    onAddSnap = () => {
        this.props.addSnap()
    }

    renderSnaps = (snaps) => {
        const colors = ['neutral-1-a', 'ok', 'neutral-2-a', 'accent-2-a', 'neutral-3-a',
                        'warning', 'neutral-4-a', 'accent-1-a', 'critical']
        let count = 0
        return Object.keys(snaps).reduce((list,id,index) => {
            const color = colors[index - (colors.length * count)]
            list.push(
                <Tile key={id} colorIndex={color}
                    onClick={this.onSelectSnap.bind(this, snaps[id], color)}
                >
                    <Card label={snaps[id].categories}
                        heading={snaps[id].title}
                        contentPad="small"
                        
                    />
                </Tile>
            )
            if((index + 1)/colors.length === count + 1){
                count++
            }
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
                        onClick={this.onAddSnap}
                        target={''}
                        />
                        <Label>New Snap</Label>
                    </Box>
                    <Tiles fill flush={false} selectable >
                        {this.renderSnaps(this.props.snaps)}
                    </Tiles>
                </Box>
                <Footer></Footer>
            </App>
        );
    }
}

export default connect(({snaps : {snaps}})=>({snaps}), { getSnaps, selectSnap, addSnap })(SnapsView)