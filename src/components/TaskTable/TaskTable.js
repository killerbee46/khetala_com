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
]

export default function TaskTable( props ) {
const {status} = props
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Skills Required</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Performed By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.skills_required}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.performed_by}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}