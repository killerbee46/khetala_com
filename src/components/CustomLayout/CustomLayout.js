import { Content } from "antd/lib/layout/layout"
import Container from "../Container/Container"
import Footer from "../Footer/Footer"
import { HomeBanner } from "../HomeBanner/HomeBanner"
import Navbar from "../Navbar/Navbar"

export const CustomLayout = (props) => {
    return (
        <Content>
            <Navbar />
            {props.home ? <HomeBanner /> : null}
            <Container>
                <div style={{ paddingTop: '30px' }}>
                    {props.children}
                </div>

            </Container>
            <Footer />
        </Content>
    )
}
export default CustomLayout