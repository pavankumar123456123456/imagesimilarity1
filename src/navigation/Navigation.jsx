import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    useHistory,
} from "react-router-dom";
import RapidApi from '../pages/rapidApi/RapidApi';
import SenchaApi from '../pages/senchaApi/SenchaApi';
import { localRoute } from '../routes/localRoutes';

const Navigation = React.memo((props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={RapidApi} />
                <Route exact path={`${localRoute.rapidApi}`} component={RapidApi} />
                <Route exact path={`${localRoute.senchaExpressApi}`} component={SenchaApi} />
            </Switch>
        </div>
    )
})

export default withRouter(Navigation)