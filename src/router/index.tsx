import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import {
    Cadastro,
    Biografia,
    Galeria,
    Main,
} from "../pages";

const Routes = () => {
    return (
        <Switch>
            <Route path="/galeria" component={Galeria} />
            <Route path="/cadastro" component={Cadastro} />
            <PrivateRoute exact path="/" component={Biografia} />
            <Route path="/" component={Main} />
        </Switch>
    );
};

export default Routes;