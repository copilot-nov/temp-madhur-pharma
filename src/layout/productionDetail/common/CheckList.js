import React, { useState } from "react";
import { CheckCircle, Circle, AddCircleTwoTone } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";
import AddBatchTextOrImg from "../../../components/productionBatchList/AddBatchTextOrImg";

const useStyles = makeStyles({
  checkMainHeading: {
    marginRight: "8px",
  },
  checkCircle: {
    color: green[600],
    marginRight: "5px",
  },
});

const CheckList = ({ data = [] }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <Box>
      <div style={{ float: "right", marginRight: 27, fontSize: "15px" }}>
        <span className={classes.checkMainHeading}>ST</span>
        <span className={classes.checkMainHeading}>PR</span>
        <span className={classes.checkMainHeading}>QA</span>
      </div>
      {data.map((l) => (
        <CheckBox {...l} openModal={openModal} />
      ))}
      <div>
        <AddBatchTextOrImg
          open={open}
          closeModal={closeModal}
          setOpen={setOpen}
        />
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
    <Grid container mt={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant="body1">{props.label}</Typography>
      </Grid>
      <Grid item xs={6} textAlign="right" mt={1}>
        {checkST ? (
          <CheckCircle style={{ color: green[600], marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => setCheckST(true)}
            style={{ color: green[600], marginRight: "5px" }}
          />
        )}
        {checkPR ? (
          <CheckCircle style={{ color: green[600], marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => setCheckPR(true)}
            style={{ color: green[600], marginRight: "5px" }}
          />
        )}
        {checkQA ? (
          <CheckCircle style={{ color: green[600], marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => setCheckQA(true)}
            style={{ color: green[600], marginRight: "5px" }}
          />
        )}
        <button onClick={props.openModal}>
          <AddCircleTwoTone style={{ color: "#FBDF01", marginRight: "5px" }} />
        </button>
      </Grid>
    </Grid>
  );
};
