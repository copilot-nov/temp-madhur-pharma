import React, { useState } from "react";
import { CheckCircle, Circle, AddCircleTwoTone} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";
import AddBatchTextOrImg from "../../../components/productionBatchList/AddBatchTextOrImg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  checkMainHeading: {
    marginRight: "8px",
  },
  checkCircle: {
    color: green[600],
    marginRight: "5px",
  },
});


const CheckList = ({ data = [] , p_id }) => {
  

  
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    
    <Box sx={{paddingBottom:10}}>
    <Typography  style={{
      fontStyle:"italic",
      paddingLeft:30,
      paddingTop:20,
      paddingBottom:20
    }}variant="h6">
      Checklist
    </Typography>
  
       
          <div style={{ float: "right", marginRight: 40, fontSize: "15px" }}>
        <span className={classes.checkMainHeading}>ST</span>
        <span className={classes.checkMainHeading}>PR</span>
        <span className={classes.checkMainHeading}>QA</span>
      </div>
      <div>

      <TableContainer sx={{marginTop:5}}component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        {data.filter(process=> process.prod_proc_id === p_id).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body1"> {row.text}</Typography>
                  
              </TableCell>
              <TableCell align="right">
              <CheckBox {...row} openModal={openModal} />
            </TableCell>
           
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
         
        </TableBody>
      </Table>
    </TableContainer>
    
        <AddBatchTextOrImg
          open={open}
          closeModal={closeModal}
          setOpen={setOpen}
        />

        <div>
        <button
                                                        type="submit"
                                                        style={{float:"right", margin:28}}
                                                        className="inline-flex  py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Save
                                                    </button>
        </div>
      </div>
    


    </Box>
  );
};

export default CheckList;




    
const CheckBox = (props) => {
  const [checkST, setCheckST] = useState(false);
  const [checkPR, setCheckPR] = useState(false);
  const [checkQA, setCheckQA] = useState(false);

  return (
     <div>
        {checkST ? (
          <CheckCircle  onClick={() => checkST ? setCheckST(false): setCheckST(true)} style={{ color: green[600], marginRight: "5px" }} />
        ) : (
          <Circle
                onClick={() => checkST ? setCheckST(false): setCheckST(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        {checkPR ? (
          <CheckCircle 
          onClick={() => checkPR ? setCheckPR(false): setCheckPR(true)}
          style={{ color: green[600], marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => checkPR ? setCheckPR(false): setCheckPR(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        {checkQA ? (
          <CheckCircle onClick={() => checkQA ? setCheckQA(false): setCheckQA(true)} style={{ color:green[600], marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => checkQA ? setCheckQA(false): setCheckQA(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        <button onClick={props.openModal}>
          <AddCircleTwoTone style={{ color: "#808080", marginRight: "5px" }} />
        </button> 
      </div> 
  );
};
