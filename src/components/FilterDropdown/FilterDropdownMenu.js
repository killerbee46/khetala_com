import { Menu } from "antd"

export const FilterDropdownMenu = (props) => {
    const menus = props.data
    return(
        <div>
            {menus.map((data,index)=>{
            return <Menu>
            <Menu.Item key={index}>
                {data}
            </Menu.Item>
        </Menu>
        })}
        </div>
    )
}

export default FilterDropdownMenu