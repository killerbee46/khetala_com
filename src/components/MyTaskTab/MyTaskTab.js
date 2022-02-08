import { Tabs } from "antd"
import { TaskTable } from "../TaskTable/TaskTable"
const {TabPane} = Tabs

export const MyTaskTab = (props) => {

    const task = [
        {key:'1',title:'Plumbing',category:'Plumbing',postedBy:'hari ram', assignedTo:'',price:200,status:'Completed'},
        {key:'2',title:'Plumbing',category:'Plumbing',postedBy:'hari ram', assignedTo:'',price:200,status:'Completed'},
        {key:'3',title:'Plumbing',category:'Plumbing',postedBy:'hari ram', assignedTo:'',price:200,status:'Pending'},
        {key:'4',title:'Plumbing',category:'Plumbing',postedBy:'hari ram', assignedTo:'',price:200,status:'Assigned'},
        {key:'5',title:'Plumbing',category:'Plumbing',postedBy:'hari ram', assignedTo:'',price:200,status:'Pending'},
      ]

    const taskTabs = [
        {key:'1', title:"All Tasks", for:"All" },
        {key:'2', title:"Completed Tasks",for:"Completed"},
        {key:'3', title:"Assigned Tasks", for:"Assigned"},
        {key:'4', title:"Pending Tasks", for:"Pending"},
    ]

    return(
        <Tabs defaultActiveKey="1">
        {taskTabs.map(data=>{
            return <TabPane tab={data.title} key={data.key}>
            <TaskTable data={task} />
          </TabPane>
        })}
        </Tabs>
    )
}

export default MyTaskTab