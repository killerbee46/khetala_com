import { Card, Image, Typography } from "antd"
import { Link } from "react-router-dom"
import BidButton from "../Button/BidButton"
import ButtonCustom from "../Button/ButtonCustom"

export const JobCard = () => {
    return (
        <Card
            cover={<Image preview={false}
                src="https://www.peoplesreview.com.np/wp-content/uploads/2021/05/file-20191203-66986-im7o5.jpg" />
            }
            className="job_card">

                <Typography.Title level={3}>
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