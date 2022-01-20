import { Avatar, Card, Grid, Typography } from "@mui/material"
import SkillsChip from "../SkillsChip/SkillsChip"
import './JobCard.css'

const JobCard = (props) => {
    const {job} = props
    const skill = ['html','css','java','painting','laboring']
    console.log(job)
    return (
        <Card>
            <Grid container>
                <Grid item lg={3}  alignContent="middle">
                    <Avatar sx={{height:60,width:60}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
                </Grid>
                <Grid item lg={9}>
                    <Typography className="job-title">{job.title}</Typography>
                    <Typography className="job-desc">{job.desc}</Typography>
                    <Typography className="skills-required">
                        {job.skills.map(data=>{
                            return <SkillsChip data={data} />
                        })}
                    </Typography>
                    <Typography className="job-price">Price:{job.price}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default JobCard