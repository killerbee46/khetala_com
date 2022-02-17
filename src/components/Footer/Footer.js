import './Footer.css'
import { Row, Col, Typography } from 'antd'
import Container from "../Container/Container"
import { Logo } from '../Logo/Logo'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons/lib/icons'
import { FooterMenu } from './FooterMenu'
import { FooterContact } from './FooterContact'

export const Footer = () => {
    const categories = [
        { title: 'plumbing', path:'/categories/plumbing'},
        { title: 'lumbing', path:'/categories/plumbing'},
        { title: 'umbing', path:'/categories/plumbing'},
        { title: 'mbing', path:'/categories/plumbing'},
    ]
    const links = [
        { title: 'About', path:'/about'},
        { title: 'Contact', path:'/contact'},
        { title: 'Post a task', path:'/add-task'},
        { title: 'Be a member', path:'/register'},
    ]
    const contact = [
        { icon: <EnvironmentOutlined />, info: "Mitrapark, Kathmandu"},
        { icon: <PhoneOutlined />, info: "9809809801"},
        { icon: <MailOutlined />, info: "ppoop@ppoop.com"},
    ]
    return (
        <div className='bg--black footer'>
            <Container>
                <Row gutter={30}>
                    <Col lg={6}>
                    <Typography.Title className='text--white' level={4}>
                    <Logo />
                        </Typography.Title>
                        <Typography.Paragraph className='text--white'>
                            We at tasker are here to provide a bridge
                        </Typography.Paragraph>
                    </Col>
                    <Col lg={6}>
                        <Typography.Title className='text--white' level={4}>
                            Contact
                        </Typography.Title>
                        {contact.map(data=> {
                            return <FooterContact data={data} />
                        })}
                    </Col>
                    <Col lg={6}>
                    <Typography.Title className='text--white' level={4}>
                            Categories
                        </Typography.Title>
                        {categories.map(data=>{
                            return <FooterMenu data={data} />
                        })}
                    </Col>
                    <Col lg={6}>
                    <Typography.Title className='text--white' level={4}>
                            Links
                        </Typography.Title>
                        {links.map(data=>{
                            return <FooterMenu data={data} />
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer