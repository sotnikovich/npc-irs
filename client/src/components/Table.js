import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchSupplies } from "../api/api";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
    border: "1px solid grey",
    borderBottom: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid grey",
  },
}));

const SecondTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
    border: "1px solid grey",
  },
}));

export const CustomizedTables = () => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    fetchSupplies().then((data) => {
      setItems(data);
    });
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: 240 }} align="center">
                Организация-исполнитель
              </StyledTableCell>
              <StyledTableCell sx={{ width: 160 }} align="center">
                Плазма свежозамор.
              </StyledTableCell>
              <StyledTableCell sx={{ width: 160 }} align="center">
                Эритроцитарная масса
              </StyledTableCell>
              <StyledTableCell sx={{ width: 160 }} align="center">
                Иммуноглобулин человека
              </StyledTableCell>
              <StyledTableCell sx={{ width: 160 }} align="center">
                Альбумин 10-процентный
              </StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Наиме- нование
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Местона-хождение
              </SecondTableCell>
              <SecondTableCell sx={{ width: 70 }} align="center">
                ИНН
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Макс. об. (тыс. литров)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Цена (тыс. руб. за один литр)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Макс. об. (тыс. литров)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Цена (тыс. руб. за один литр)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Макс. об. (тыс. литров)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Цена (тыс. руб. за один литр)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Макс. об. (тыс. литров)
              </SecondTableCell>
              <SecondTableCell sx={{ width: 80 }} align="center">
                Цена (тыс. руб. за один литр)
              </SecondTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.supplies_id}>
                <StyledTableCell>{item.naim_org}</StyledTableCell>
                <StyledTableCell>{item.adr_fact}</StyledTableCell>
                <StyledTableCell>{item.inn}</StyledTableCell>
                <StyledTableCell>{item.plazma_max}</StyledTableCell>
                <StyledTableCell>{item.plazma_price}</StyledTableCell>
                <StyledTableCell>{item.erm_max}</StyledTableCell>
                <StyledTableCell>{item.erm_price}</StyledTableCell>
                <StyledTableCell>{item.immg_max}</StyledTableCell>
                <StyledTableCell>{item.immg_price}</StyledTableCell>
                <StyledTableCell>{item.alb_max}</StyledTableCell>
                <StyledTableCell>{item.alb_price}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
