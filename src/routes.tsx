import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanageMaps from './pages/OrphanageMaps';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanageMaps} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;