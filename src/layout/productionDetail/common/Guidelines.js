import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#f0f0f0',
    position: 'fixed',
    width: '92%',
    zIndex: 2,
    top: '80px',
    left: '50%',
    height: '100%',
    transform: 'translateX(-50%)',
    height: '80vh',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    }
  },
  heading: {
    padding: 15,
    paddingBottom: 0,
  },
  closeIcon: {
    float: 'right',
    marginRight: 10,
    marginTop: 20,
    cursor: 'pointer'
  }
}));

const Guidelines = ({ handleClose ,data=[],p_id}) => {
  

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CloseIcon onClick={handleClose} className={classes.closeIcon} />
      <Typography variant="h6" className={classes.heading}>Guidelines</Typography>
      <List>
         {
           data.filter(guidelines => guidelines.prod_proc_id === p_id).map(guidelines => {
            return(
            <ListItem key={guidelines.id}>{guidelines.text} </ListItem>
            )
           })


         }
       

        {/* <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
        <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
        <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem> */}
      </List>
    </Box>
  );
};

export default Guidelines;
