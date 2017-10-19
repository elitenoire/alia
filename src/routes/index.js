import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SnapsView from '../containers/SnapsView'
import SnapsMaker from '../containers/SnapsMaker'
import SnapSingleView from '../containers/SnapSingleView'
import { HOME_PATH, CREATE_SNAP_PATH, EDIT_SNAP_PATH, VIEW_SNAP_PATH } from './routeMap'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path={process.env.PUBLIC_URL + HOME_PATH} exact component={SnapsView} />
                <Route path={process.env.PUBLIC_URL + CREATE_SNAP_PATH} render={props => <SnapsMaker {...props} mode="CREATE" />} />
                <Route path={process.env.PUBLIC_URL + EDIT_SNAP_PATH + ':id'} render={props => <SnapsMaker {...props} mode="UPDATE" />} />
                <Route path={process.env.PUBLIC_URL + VIEW_SNAP_PATH + ':id'} component={SnapSingleView} />
            </Switch>
        </div>
    )
}

export default Router;