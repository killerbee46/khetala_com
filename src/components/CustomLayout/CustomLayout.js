import { Content } from "antd/lib/layout/layout"
import Container from "../Container/Container"
import Navbar from "../Navbar/Navbar"

export const CustomLayout = (props) => {
    return (
        <Content>
            <Navbar />
            <Container>
                <div style={{ paddingTop: '30px' }}>
                    {props.children}
                </div>

            </Container>
        </Content>
    )
}
export default CustomLayout