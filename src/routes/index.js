import React from 'react'
import { Route } from 'react-router-dom'
import SnapsView from '../containers/SnapsView'

const Router = () => {
    return (
        <div>
            <Route path="/" component={SnapsView}></Route>
            {/* <Route path="" component={}></Route>
            <Route path="" component={}></Route>
            <Route path="" component={}></Route>
            <Route path="" component={}></Route> */}
        </div>
    )
}

export default Router;