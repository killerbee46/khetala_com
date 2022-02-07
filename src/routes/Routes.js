import { Route, Switch } from "react-router";
import Home from "../views/Home";
import { Login } from "../views/Login";
import MyTask from "../views/MyTask";

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/my_task' exact component={MyTask} />
            <Route path='/login' exact component={Login} />

        </Switch>
    )
}