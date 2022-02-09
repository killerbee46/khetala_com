import { Col, Row } from "antd"
import FiltersBar from "../FilterBar/FiltersBar"
import JobCard from "../JobCard/JobCard"

export const BrowseTaskSection = () => {
    return(
        <div>
            <div style={{padding:"20px 0"}}>
            <FiltersBar />
            </div>
            <Row justify="space-between" gutter={[0,30]}>
            {Array(10).fill(null).map(data=>{
                return <Col lg={7}>
                    <JobCard />
                </Col>
            })}
            </Row>
        </div>
    )
}

export default BrowseTaskSection