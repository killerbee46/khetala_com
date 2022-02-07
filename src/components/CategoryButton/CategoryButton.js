import { HomeFilled } from "@ant-design/icons/lib/icons"
import { Button } from "antd"
import './CategoryButton.css'

export const CategoryButton = (props) => {
    return(
        <Button className="category_button">
            <HomeFilled />
             Category</Button>
    )
}

export default CategoryButton