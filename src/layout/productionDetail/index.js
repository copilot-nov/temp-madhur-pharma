import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/navbar";
import { Grid } from "@mui/material";
import CheckList from "./common/CheckList";
import Guidelines from "./common/Guidelines";
import { connect } from "react-redux";
import { GET_PRODUCTION_BATCH_BY_ID } from "../../redux/actions/production";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const checkListData = [
  {
    label: "Area cleanliness and general house keeping",
  },
  {
    label: "Area cleanliness",
  },
  {
    label: "General house keeping",
  },
];

const accordionData = [
  {
    heading: "Batch Details",
    panel: "panel1",
    value: <CheckList data={checkListData} />,
  },
  {
    heading: "Ingredient Dispensing",
    panel: "panel2",
    value: (
      <React.Fragment>
        <CheckList data={checkListData} />,
        <Grid container mt={2}>
          {[
            {
              medName: "Somedocinol",
              percentage: 10,
              PQ: 89,
              AQ: 87.26,
              AR: "RWR2102",
              G: "1.000",
              T: 87.6,
              N: 88.6,
            },
            {
              medName: "Somedocinol 2",
              percentage: 10,
              PQ: 89,
              AQ: 87.26,
              AR: "RWR2102",
              G: "1.000",
              T: 87.6,
              N: 88.6,
            },
            {
              medName: "Somedocinol 3",
              percentage: 10,
              PQ: 89,
              AQ: 87.26,
              AR: "RWR2102",
              G: "1.000",
              T: 87.6,
              N: 88.6,
            },
          ].map((e) => (
            <Grid item xs={12} marginTop={2} justifyContent="space-between">
              <Grid container>
                <Grid xs={6}></Grid>
                <Grid xs={2}>
                  <strong>%</strong>
                </Grid>
                <Grid xs={2}>
                  <strong>AQ</strong>
                </Grid>
                <Grid xs={2}>
                  <strong>PQ</strong>
                </Grid>
              </Grid>
              <Grid container mt={5}>
                <Grid xs={6}>{e.medName}</Grid>
                <Grid xs={2}>{e.percentage}</Grid>
                <Grid xs={2}>{e.AQ}</Grid>
                <Grid xs={2}>
                  <input
                    value={e.PQ}
                    style={{
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container mt={5} justifyContent="space-between">
                <Grid xs={4}>
                  <strong>AR: </strong>{" "}
                  <input
                    value={e.AR}
                    style={{
                      border: "1px solid black",
                      width: "90px",
                      textAlign: "center"
                    }}
                  />
                </Grid>
                <Grid xs={2.5}>
                  <strong>G: </strong>{" "}
                  <input
                    value={e.G}
                    style={{
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center",
                    }}
                  />
                </Grid>
                <Grid xs={2.5}>
                  <strong>T: </strong>{" "}
                  <input
                    value={e.T}
                    style={{
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center",
                    }}
                  />
                </Grid>
                <Grid xs={2.5}>
                  <strong>N: </strong>{" "}
                  <input
                    value={e.N}
                    style={{
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    ),
  },
  {
    heading: "Product Manufacturing",
    panel: "panel3",
    value: <CheckList data={checkListData} />,
  },
  {
    heading: "Product Unloading",
    panel: "panel4",
    value: <CheckList data={checkListData} />,
  },
  {
    heading: "Packing Material Dispensing",
    panel: "panel5",
    value: <CheckList data={checkListData} />,
  },
  {
    heading: "Cleaning & Inspection",
    panel: "panel6",
    value: <CheckList data={checkListData} />,
  },
  {
    heading: "Filling & Packing",
    panel: "panel7",
    value: <CheckList data={checkListData} />,
  },
];

const RenderHeaderAndValue = (props) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "50%", fontWeight: "bold" }}>{props.header}</div>
      <div
        style={{
          paddingRight: "5px",
          width: "50%",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {props.value}
      </div>
    </div>
  );
};

function CustomizedAccordions(props) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState("panel1");
  const [isGuidelinesOpen, setGuidelinesOpen] = useState(false);
  const { id } = useParams();
  const [selectedBatch, setSelectedBatch] = useState(null);
  useEffect(() => {
    GET_PRODUCTION_BATCH_BY_ID(id).then((resp) => {
      setSelectedBatch(resp);
    });
  }, [id]);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (expanded !== panel) {
      handleGuidelinesStatus();
    }
  };

  const handleGuidelinesStatus = () => {
    setGuidelinesOpen((open) => !open);
  };

  return (
    <div>
      <Navbar current={"/production"} />

      <Grid container flex justifyContent={"space-between"} px={2} pt={2}>
        <Link to="/production">
          <Grid
            item
            onClick={() => navigate("/production")}
            style={{ cursor: "pointer" }}
          >
            <ChevronLeftIcon /> Back
          </Grid>
        </Link>

        <Grid item>Batch ID | Status</Grid>
      </Grid>

      {isGuidelinesOpen && <Guidelines handleClose={handleGuidelinesStatus} />}

      <Grid container spacing={2} p={2}>
        <Grid item width="100%">
          <Typography>Batch Details</Typography>
          <div
            style={{
              fontSize: "14px",
              display: "flex",
              padding: "10px",
              flexWrap: "wrap",
              borderTop: "1 solid #e0e0e0",
            }}
          >
            <RenderHeaderAndValue
              header="Batch ID"
              value={selectedBatch?.batch_code}
            />
            <RenderHeaderAndValue
              header="Status"
              value={selectedBatch?.production_batch_status?.label}
            />
            <RenderHeaderAndValue
              header="Product"
              value={selectedBatch?.production_batch_product_id?.name}
            />
            <RenderHeaderAndValue
              header="Customer"
              value={selectedBatch?.emp_id}
            />
            <RenderHeaderAndValue
              header="Start Date"
              value={moment(selectedBatch?.plan_startdate).format("DD/MM/YYYY")}
            />
            <RenderHeaderAndValue
              header="Quantity"
              value={`${selectedBatch?.plan_quantity} ${selectedBatch?.production_batch_uom?.label}`}
            />
          </div>
        </Grid>

        {accordionData.slice(1).map((item, i) => (
          <Grid item width="100%">
            <Accordion
              expanded={expanded === item.panel}
              onChange={handleChange(item.panel)}
            >
              <AccordionSummary
                aria-controls={`${item.panel}d-content`}
                id={`${item.panel}d-header`}
              >
                <Typography>{item.heading}</Typography>
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

export default connect(null, null)(CustomizedAccordions);
