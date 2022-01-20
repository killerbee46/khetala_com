import { Grid } from "@mui/material";

export default function Container(props){
    return(
        <Grid justifyContent='center' container>
            <Grid item lg={9}>
                {props.children}
            </Grid>
        </Grid>
    )
}