import { Button } from "antd"
import './ButtonCustom.css'

export const ButtonCustom = (props) => {
    return(
        <Button className="theme-button">
            {props.children}
        </Button>
    )
}
export default ButtonCustom