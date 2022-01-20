import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Pending", performed_by:"" },
  { title:"Bulb Change3", skills_required:"Electrician", price:500, status:"Completed", performed_by:"" },
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Pending", performed_by:"" },
  { title:"Bulb Change2", skills_required:"Electrician", price:500, status:"Completed", performed_by:"" },
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Pending", performed_by:"" },
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Requested", performed_by:"" },
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Posted", performed_by:"" },
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Pending", performed_by:"" },
  { title:"Bulb Change", skills_required:"Electrician", price:500, status:"Assigned", performed_by:"" },
]

export default function TaskTable( props ) {
const {status} = props
const [filtered,setFiltered] = React.useState([])
React.useEffect(()=>{
    if(status === "All"){
      const filtered = setFiltered(rows)
    }
    else{
      const filtered = setFiltered(rows.filter(data=> data?.status === status))
    }
},[filtered])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Skills Required</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Performed By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((row) => (
            <TableRow style={{width:'100%'}}
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.skills_required}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.performed_by}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}