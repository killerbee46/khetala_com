import { Table } from "antd"
// import { useEffect, useState } from 'react'

export const TaskTable = (props) => {

  const tasks = props.data

  // const [filtered, setFiltered] = useState([])

  // useEffect(()=>{
  //   if(props.for==="All"){
  //     const filtered = setFiltered(tasks)
  //   }
  //   else{
  //     const task = tasks.map(data=>{
  //       { data.filter((data,index)=> data?.status === props.for).map(data=>{
  //         return {data}
  //       })}
  //     })
  //     const filtered = setFiltered(task)
  //   }
    
  // },[filtered])

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Posted By',
          dataIndex: 'postedBy',
          key: 'postedBy',
        },
        {
          title: 'Assigned To',
          dataIndex: 'assignedTo',
          key: 'assignedTo',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ]

    return(
        <Table dataSource={tasks} columns={columns} />
    )
}