import { Col, Row } from "antd"
import CategoryButton from "../Components/CategoryButton/CategoryButton"
import CustomLayout from "../Components/CustomLayout/CustomLayout"
import { HomeBanner } from "../Components/HomeBanner/HomeBanner"
import JobCard from "../Components/JobCard/JobCard"

export default function Home() {
    return (
        <CustomLayout home>
            <Row>
                <Col lg={6}>
                    <JobCard />
                </Col>
            </Row>
        </CustomLayout>
    )
}