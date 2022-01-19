import { Route, Switch } from "react-router";
import Home from "../views/Home";
import MyTask from "../views/MyTask";

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/my_task' exact component={MyTask} />

        </Switch>
    )
}