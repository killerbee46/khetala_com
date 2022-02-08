import { KeyOutlined, LockOutlined, UserOutlined } from "@ant-design/icons/lib/icons"
import { Button, Checkbox, Form, Input } from "antd"
import { Link } from "react-router-dom";
import FormCard from "../FormCard/FormCard"

export const LoginForm = (props) => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <FormCard title="Login">
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
                            message: 'Please input your email!',
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

                <Form.Item className="text-center">
                    <Button className="button--secondary button--round button--large button--wide" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                <Form.Item className="text-center">
                    <Link to='/forgot_password' className="text--black">Forgot your password?</Link>
                </Form.Item>
                <Form.Item className="text-center">
                    <Link to='/register'>
                        <Button className="button--primary button--round button--large">
                            Become a Tasker
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </FormCard>
    )
}

export default LoginForm