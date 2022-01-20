import { Grid } from "@mui/material"
import JobCard from "../JobCard/JobCard"

export const JobSection = () => {
    const jobs = [
        {title:'Job Title',desc:'Job Description',skills:["html","only"],price:600},
        {title:'Job Title',desc:'Job Description',skills:["html","only"],price:600},
        {title:'Job Title',desc:'Job Description',skills:["html","only"],price:600},
        {title:'Job Title',desc:'Job Description',skills:["html","only"],price:600},
        {title:'Job Title',desc:'Job Description',skills:["html","only"],price:600},
        {title:'Job Title',desc:'Job Description',skills:["html","only"],price:600},
    ]
    return(
        <Grid container gap={2}>
            {jobs.map((data,index)=>{
                return <Grid item lg={3} key={index}>
                    <JobCard job={data} />
                    </Grid>
            })}
        </Grid>
    )
}