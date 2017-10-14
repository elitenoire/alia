import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SnapsView from '../containers/SnapsView'
import SnapsNewView from '../containers/SnapsNewView'
import SnapSingleView from '../containers/SnapSingleView'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={SnapsView} />
                <Route path="/snaps/new" render={props => <SnapsNewView {...props, mode="Create New"} />} />
                <Route path="/snaps/edit/:id" render={props => <SnapsNewView {...props, mode="Edit"} />} />
                <Route path="/snaps/:id" component={SnapSingleView} />
            </Switch>
            {/* <Route path="" component={}></Route>
            <Route path="" component={}></Route> */}
        </div>
    )
}

export default Router;