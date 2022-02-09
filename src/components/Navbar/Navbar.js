import { Content } from "antd/lib/layout/layout"
import { Input, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import './Navbar.css'
import ButtonCustom from '../Button/ButtonCustom'
import { useState } from "react";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";

export const Navbar = () => {
    const [isLoggedIn, setLogged] = useState(false)
    return (
        <Content className="shadow-bottom">
            <Container>
            <Menu mode="horizontal" className="navbar">
                <div>
                <Link to="/">
                <Menu.Item className="menu-item">
                    {/* <Logo /> */}
                    <Typography.Title>H</Typography.Title>
                </Menu.Item>
                </Link>
                </div>
                <div className="flex">
                <Link to="/add-task">
                <Menu.Item className="menu-item">
                    <ButtonCustom>Add a task</ButtonCustom>
                </Menu.Item>
                </Link>
                <Link to='/browse-task'>
                <Menu.Item className="menu-item">
                    Browse task
                </Menu.Item>
                </Link>
                <Link to="my-task">
                <Menu.Item className="menu-item">
                    My Tasks
                </Menu.Item>
                </Link>
                </div>
                <div className="flex">
                    <Input.Search style={{marginTop:'5px'}} className="menu-item" />
                
                {isLoggedIn ? <ProfileDropdown /> : 
                <Link to="/login">
                <Menu.Item className="menu-item">
                    Login
                </Menu.Item>
                </Link>
                }
                </div>
            </Menu>
            </Container>
        </Content>
    )
}

export default Navbar