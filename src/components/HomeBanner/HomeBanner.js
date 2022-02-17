import { Button, Image, Row, Typography } from "antd"
import { Content } from "antd/lib/layout/layout"
import { Link } from "react-router-dom"
import "./HomeBanner.css"

export const HomeBanner = () => {
    const slider = "https://thumbs.dreamstime.com/b/career-choice-people-different-professions-white-background-banner-design-187309657.jpg"
    return(
        <Content className="banner__container">
            <Image preview={false} src={slider} />
            <div className="banner_content">
                <Typography.Title>Welcome to Kamdaar</Typography.Title>
                <Typography.Title level={2}>Have some chores to do?</Typography.Title>
                <Link to='/add-task'>
                <Button className="button button--primary button--round button--large">Post Task Here</Button>
                </Link>
            </div>
        </Content>
    )
}