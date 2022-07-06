import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green } from '@mui/material/colors';

const useStyles = makeStyles({
  checkMainHeading: {
    marginRight: '7px'
  },
  checkCircle: {
    color: green[600],
    marginRight: '5px'
  }
});

const CheckList = ({ data = [] }) => {
  const classes = useStyles();
  return (
    <Box>
      <div style={{ float: 'right', fontSize: '15px' }}>
        <span className={classes.checkMainHeading}>ST</span>
        <span className={classes.checkMainHeading}>PR</span>
        <span className={classes.checkMainHeading}>QA</span>
      </div>
      {data.map((l) => (
        <Grid container mt={2} alignItems='center'>
          <Grid item xs={6}>
            <Typography variant="body1">{l.label}</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right" mt={1}>
            <CheckCircle style={{ color: green[600], marginRight: '5px' }} />
            <CheckCircle style={{ color: green[600], marginRight: '5px' }} />
            <CheckCircle style={{ color: green[600], marginRight: '5px' }} />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default CheckList;
