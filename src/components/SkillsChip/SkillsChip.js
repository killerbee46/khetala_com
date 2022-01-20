import { Chip } from '@mui/material'
import './SkillsChip.css'

const SkillsChip = (props) => {
    return(
        <Chip label={props.data} className='skill-chip' color='success' variant='outlined' />
    )
}

export default SkillsChip