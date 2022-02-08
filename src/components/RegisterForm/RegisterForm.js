import { LockOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormCard from "../FormCard/FormCard"

export const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <FormCard title="Register">
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
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="Email" prefix={<UserOutlined className="text--bigger" />} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" prefix={<LockOutlined className="text--bigger" />} />
                </Form.Item>
                <Form.Item
                    name="rePassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please re-input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Re-enter Password" prefix={<LockOutlined className="text--bigger" />} />
                </Form.Item>

                <Form.Item className="text-center">
                    <Button className="button--secondary button--round button--large button--wide" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item className="text-center">
                    <Link to='/login'>
                        <Button className="button--primary button--round button--large">
                            Have Account?
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </FormCard>
    )
}

export default RegisterForm