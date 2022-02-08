import { Col, Row } from "antd"

export const Container = (props) => {
    return(
        <Row justify="center">
            <Col lg={20} md={22} xs={24}>
                {props.children}
            </Col>
        </Row>
    )
}

export default Container