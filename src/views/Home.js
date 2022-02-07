import { Col, Row } from "antd"
import CategoryButton from "../Components/CategoryButton/CategoryButton"
import { Container } from "../Components/Container/Container"
import JobCard from "../Components/JobCard/JobCard"
import Navbar from "../Components/Navbar/Navbar"

export default function Home(){
    return(
           <div>
               <Navbar />
               {/* <CategoryButton /> */}
               <Container>
               <Row>
                   <Col lg={6}>
                   <JobCard />
                   </Col>
               </Row>
               </Container>
           </div>
    )
}