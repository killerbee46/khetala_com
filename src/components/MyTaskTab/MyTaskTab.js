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
      ];

    const taskTabs = [
        {key:'1', title:"All Tasks", content:<TaskTable data={task} />},
        {key:'2', title:"Completed Tasks", content:<TaskTable data={task} />},
        {key:'3', title:"Assigned Tasks", content:<TaskTable data={task} />},
        {key:'4', title:"Pending Tasks", content:<TaskTable data={task} />},
    ]

    return(
        <Tabs defaultActiveKey="1">
        {taskTabs.map(data=>{
            return <TabPane tab={data.title} key={data.key}>
            {data.content}
          </TabPane>
        })}
        </Tabs>
    )
}

export default MyTaskTab