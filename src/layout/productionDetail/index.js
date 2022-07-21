import React, { useState } from 'react';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
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
import { connect } from 'react-redux';

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

function CustomizedAccordions(props) {
  const { productionBatchList } = props
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState('panel1');
  const [isGuidelinesOpen, setGuidelinesOpen] = useState(false);
  const { id } = useParams();
  let selectedBatch = productionBatchList.find((item) => { return item.id == id });
  console.table(selectedBatch,"This is info tech!")
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleGuidelinesStatus = () => {
    setGuidelinesOpen((open) => !open);
  };
  // console.log(accordionData)
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
        {accordionData.map((item, i) => (
          <Grid item width="100%">
            {item?.heading === "Batch Details" ?
              (<>
                <Typography>
                  {item.heading}
                </Typography>
                {/* <AccordionDetails>
                  <Typography>{item.value}</Typography>
                </AccordionDetails> */}
                <div style={{ fontSize: '14px', display: 'flex', padding: '10px', flexWrap: 'wrap', borderTop: "1 solid #e0e0e0" }}>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', fontWeight: 'bold' }}>Batch ID</div>
                    <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{selectedBatch?.batch_code}</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', fontWeight: 'bold' }}>Status</div>
                    <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}> {selectedBatch?.production_batch_status?.label}</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', fontWeight: 'bold' }}>Product</div>
                    <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{selectedBatch?.production_batch_product_id?.name}
                    </div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', fontWeight: 'bold' }}>Customer</div>
                    <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{selectedBatch?.emp_id}</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', fontWeight: 'bold' }}>Start Date</div>
                    <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{moment(selectedBatch?.plan_startdate).format('DD/MM/YYYY')}</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%', fontWeight: 'bold' }}>Quantity</div>
                    <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{`${selectedBatch?.plan_quantity} ${selectedBatch?.production_batch_uom?.label}`}</div>
                  </div>
                </div>
              </>
              ) : (
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
              )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    productionBatchList: state?.ProductionReducer.productionBatchList
  };
};

export default connect(mapStateToProps, null)(CustomizedAccordions);