import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../screens/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
