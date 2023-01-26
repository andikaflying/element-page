import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function EmployeeTable({
    listPegawai = [],
    headerPertama = "",
    headerKedua = "",
    headerKetiga = "",
}) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, margin: '20px' }}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{headerPertama}</TableCell>
            <TableCell >{headerKedua}</TableCell>
            <TableCell >{headerKetiga}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(listPegawai.length > 0) && listPegawai.map((pegawai) => (
            <TableRow
              key={pegawai.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pegawai.name}
              </TableCell>
              <TableCell>{pegawai.email}</TableCell>
              <TableCell>{pegawai.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}