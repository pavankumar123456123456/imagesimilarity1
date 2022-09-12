import React from 'react'
import { ConfirmProvider } from "material-ui-confirm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';

import { localRoute } from './localRoutes';
import DrawerUI from "../components/drawer/Drawer"


function RouterComponent(props) {

    return (
        <div>
            <Router>
                <ScrollToTop />
                <ConfirmProvider>
                    <Switch>
                        <Route exact path="/" component={DrawerUI} />
                        <Route exact path={`${localRoute.rapidApi}`} component={DrawerUI} />
                        <Route exact path={`${localRoute.senchaExpressApi}`} component={DrawerUI} />
                    </Switch>
                </ConfirmProvider>
            </Router>
        </div>
    )
}

export default withRouter(RouterComponent);