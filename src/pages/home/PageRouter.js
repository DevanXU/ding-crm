import { Route } from 'react-keeper'
import Home from './PageHome'
import CustomerList from './customer'

export default {
    page: Home,
    route: () => (
        <div>
            <Route index component={Home} path='/home' > </Route>
            <Route path='/customer' component={CustomerList}></Route>
        </div>)
};
