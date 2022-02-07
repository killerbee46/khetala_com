import { DownOutlined, UserOutlined } from "@ant-design/icons/lib/icons"
import { Avatar, Dropdown, Menu } from "antd"

export const ProfileDropdown = () => {
    const menu = (
        <Menu>
          <Menu.Item>
            <a href="/profile">
              My Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/logout">
              Logout
            </a>
          </Menu.Item>
        </Menu>
      )
    return (
        <a style={{marginLeft:20}}> 
            <Dropdown placement="bottomRight" overlay={menu}>
            <Avatar size={50} icon={<UserOutlined />} />
        </Dropdown>
        </a>
    )
}