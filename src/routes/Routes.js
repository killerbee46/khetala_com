import { Route, Switch } from "react-router";
import { AddTask } from "../views/AddTask";
import { BrowseTask } from "../views/BrowseTask";
import Home from "../views/Home";
import { Login } from "../views/Login";
import MyTask from "../views/MyTask";
import { Register } from "../views/Register";

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/my-task' exact component={MyTask} />
            <Route path='/add-task' exact component={AddTask} />
            <Route path='/browse-task' exact component={BrowseTask} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />

        </Switch>
    )
}