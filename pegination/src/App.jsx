import React, { useEffect, useState } from 'react'
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import axios from './utils/axios';
const App = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const getPostData = () => {
    axios.get(`posts?_page=${page}&_limit=${rowsPerPage}`).then((res) => {
      return (
        setData(res.data)
      )
    })
  }

  const handleChangePage = (e, value) => {
    setPage(value);
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e?.target?.value);
    setPage(1);
  }

  useEffect(() => {
    getPostData();
  }, [page, rowsPerPage]);

  return (
    <div className='max-w-screen-xl mx-auto mt-10 '>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>
            <Pagination count={10} page={page} onChange={handleChangePage} />

          </caption>
          <TableHead>
            <TableRow>
              <TableCell> <p className='font-semibold'>ID </p> </TableCell>
              <TableCell align="left"> <p className='font-semibold'> Title</p></TableCell>
              <TableCell align="left"> <p className='font-semibold'> Body</p></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((items) => (
              <TableRow key={items.id}>
                <TableCell><p className='font-semibold'>{items.id}</p></TableCell>
                <TableCell align="left">{items.title}</TableCell>
                <TableCell align="left">{items.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={100}
          rowsPerPageOptions={[10, 25, 75, 100]}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div >
  )
}

export default App
