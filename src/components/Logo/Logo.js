import { ToolFilled } from "@ant-design/icons/lib/icons"
import { Image } from "antd"
// import ExternalIcon from "../../Assets/images/tools.svg"

export const Logo = (props) => {
    const ExternalImage = "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2c18.png"
    return(
        // <ToolFilled className="text--big" />
        <Image width={'100px'} src={ExternalImage} preview={false} />
    )
}