import { Table } from "antd"

export const TaskTable = (props) => {
    

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
        <Table dataSource={props.data} columns={columns} />
    )
}