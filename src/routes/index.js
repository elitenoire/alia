import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SnapsView from '../containers/SnapsView'
import SnapsNewView from '../containers/SnapsNewView'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={SnapsView}></Route>
                <Route path="/snaps/new" component={SnapsNewView}></Route>
            </Switch>
            {/* <Route path="" component={}></Route>
            <Route path="" component={}></Route>
            <Route path="" component={}></Route> */}
        </div>
    )
}

export default Router;