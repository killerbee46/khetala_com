import { Card, Image, Typography } from "antd"
import { Link } from "react-router-dom"
import BidButton from "../Button/BidButton"

export const JobCard = () => {
    return (
        <Card
            cover={<Image preview={false}
                src="https://www.desktopbackground.org/download/1366x768/2012/12/31/507497_nurse-computer-wallpapers-desktop-backgrounds_1920x1200_h.jpg" />
            }
            className="job_card shadow--around">

                <Typography.Title level={4}>
                    Job Title: Doctoring
                </Typography.Title>
                <Typography.Title level={5}>
                    Job Desc: Y0! you are meant to be doctoring
                </Typography.Title>
                <Typography.Paragraph  className="flex space-between align-middle">
                    <Typography.Text>Price: Rs. 500</Typography.Text>
                    <Typography.Text><Link to="/bid/1"><BidButton /></Link></Typography.Text>
                </Typography.Paragraph>

        </Card>
    )
}

export default JobCard