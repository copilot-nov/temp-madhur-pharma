import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/navbar';
import { Grid } from '@mui/material';
import CheckList from './common/CheckList';
import Guidelines from './common/Guidelines';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

const checkListData = [
  {
    label: 'Area cleanliness and general house keeping'
  },
  {
    label: 'Area cleanliness'
  },
  {
    label: 'General house keeping'
  }
];

const accordionData = [
  {
    heading: 'Batch Details',
    panel: 'panel1',
    value: <CheckList data={checkListData} />
  },
  {
    heading: 'Ingredient Dispensing',
    panel: 'panel2',
    value: <CheckList data={checkListData} />
  },
  {
    heading: 'Product Manufacturing',
    panel: 'panel3',
    value: <CheckList data={checkListData} />
  },
  {
    heading: 'Product Unloading',
    panel: 'panel4',
    value: <CheckList data={checkListData} />
  },
  {
    heading: 'Packing Material Dispensing',
    panel: 'panel5',
    value: <CheckList data={checkListData} />
  },
  {
    heading: 'Cleaning & Inspection',
    panel: 'panel6',
    value: <CheckList data={checkListData} />
  },
  {
    heading: 'Filling & Packing',
    panel: 'panel7',
    value: <CheckList data={checkListData} />
  }
];

export default function CustomizedAccordions() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState('panel1');
  const [isGuidelinesOpen, setGuidelinesOpen] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleGuidelinesStatus = () => {
    setGuidelinesOpen((open) => !open);
  };

  return (
    <div>
      <Navbar current={'/production'} />

      <Grid container flex justifyContent={'space-between'} px={2} pt={2}>
        <Grid item onClick={() => navigate('/production')} style={{ cursor: 'pointer' }}>
          <ChevronLeftIcon /> Back
        </Grid>
        <Grid item>Batch ID | Status</Grid>
      </Grid>

      {isGuidelinesOpen && <Guidelines handleClose={handleGuidelinesStatus} />}

      <Grid container spacing={2} p={2}>
        {accordionData.map((item) => (
          <Grid item width="100%">
            <Accordion expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
              <AccordionSummary
                aria-controls={`${item.panel}d-content`}
                id={`${item.panel}d-header`}>
                <Typography onClick={() => expanded !== item.panel && handleGuidelinesStatus()}>
                  {item.heading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.value}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
