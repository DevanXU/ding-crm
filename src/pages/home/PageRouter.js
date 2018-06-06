import { Route } from 'react-keeper'
import Home from './PageHome';

export default {
    page: Home,
    route: () => (
        <div>
            <Route index component={Home} path='/home' >

            </Route>
        </div>)
};
