import { Col, Row } from "antd"
import CategoryButton from "../Components/CategoryButton/CategoryButton"
import CustomLayout from "../Components/CustomLayout/CustomLayout"
import JobCard from "../Components/JobCard/JobCard"

export default function Home() {
    return (
        <CustomLayout>
            <Row>
                <Col lg={6}>
                    <JobCard />
                </Col>
            </Row>
        </CustomLayout>
    )
}