import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, InputNumber, Select } from "antd"
import { AddFormCard } from "../Components/FormCard/FormCard"

const { Option } = Select

export const AddTask = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function onChange(value) {
        console.log('changed', value);
    }      
    return (
        <AddFormCard title="Add a task">
            <Form
                name="basic"
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Job Title"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Enter Job Title',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                rules={[
                    {
                        required: true,
                        message: 'Select Category',
                    },
                ]}
                >
                    <Select
                        showSearch
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="1">Electricity</Option>
                        <Option value="2">Plumbing</Option>
                        <Option value="3">Lumping</Option>
                        <Option value="4">Lawn</Option>
                        <Option value="5">Garden</Option>
                        <Option value="6">Nada</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please re-input your password!',
                        },
                    ]}
                >
                    <InputNumber
                        defaultValue={1000}
                        min={1000}
                        style={{width:'200px'}}
                        formatter={value => `Rs. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={onChange}
                    />
                </Form.Item>
                <Form.Item
                    label="Assigned to"
                    name="assignedTo"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Enter Job Title',
                    //     },
                    // ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item className="text-center">
                    <Button className="button--primary button--round button--large" htmlType="submit">
                        Add Task
                    </Button>
                </Form.Item>
            </Form>
        </AddFormCard>
    )
}