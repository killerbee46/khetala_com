import { HomeFilled, PicCenterOutlined } from "@ant-design/icons/lib/icons"
import { Card, Col, Divider, Row } from "antd"
import { Content } from "antd/lib/layout/layout"
import { Link } from "react-router-dom"
import Container from "../Container/Container"
import './FormCard.css'

export const FormCard = (props) => {
    return (
        <Content>
            <Container>
            <Row style={{minHeight:'100vh'}} justify="center" align="middle">
                <Col lg={10} md={12} sm={14} xs={16}>
            <Card title={<div className="flex space-between align-center"><h3>{props.title}</h3> <Link className="text--black" to='/'><HomeFilled className="text--big" /></Link></div>} className="form_card">
                {props.children}
            </Card>
            </Col>
            </Row>
            </Container>
</Content>
    )
}

export const AddFormCard = (props) => {
    return (
        <Content>
            <Container>
            <Row style={{minHeight:'100vh'}} justify="center" align="middle">
                <Col lg={18} md={20} sm={22} xs={23}>
            <Card title={<div className="flex space-between align-center"><h3>{props.title}</h3> <Link className="text--black" to='/'><HomeFilled className="text--big" /></Link></div>} className="form_card">
                {props.children}
            </Card>
            </Col>
            </Row>
            </Container>
</Content>
    )
}

export default FormCard