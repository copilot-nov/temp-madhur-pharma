import React, { useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";
import { CheckCircle, Circle, AddCircleTwoTone } from "@mui/icons-material";
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
import {  Grid ,Stack,Box,TextField,Button} from "@mui/material";
import CheckList from "./common/CheckList";
import Guidelines from "./common/Guidelines";
import { connect } from "react-redux";
import { GET_PRODUCTION_BATCH_BY_ID ,GET_PRODUCTION_BATCH_BY_INGREDIENTS,GET_PRODUCTION_BATCH_CHECKLIST,GET_INGREDIENT_MASTER,
GET_PRODUCTION_BATCH_GUIDELINES} from "../../redux/actions/production";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { GET_PRODUCT_FORMULATION_BY_ID,GET_PRODUCTION_BATCH_STAGES} from '../../redux/actions/admin';
import RemoveIcon from '@mui/icons-material/Remove';





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

const useStyles = makeStyles({
  checkMainHeading: {
    marginRight: "8px",
  },
  checkCircle: {
    color: green[600],
    marginRight: "5px",
  },
});


const RenderHeaderAndValue = (props) => {
  // console.log(props);
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


 
  const [dateWithNoInitialValue, setDateWithNoInitialValue] = React.useState(null);
  
  const [observation1, setObservation1] = React.useState(false);
  const [ingredientData, setIngredientData]= React.useState([]);
  const [observation2, setObservation2] = React.useState(false);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState("panel1");
  const [isGuidelinesOpen, setGuidelinesOpen] = useState(false);
  const {id} = useParams();
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [checkListData, setCheckList]= React.useState([]);
  const [guidelinesData, setGuidelines]= React.useState([]);
  const [processID, setprocessID]= React.useState(5);
  const [unloadingRow,addUnloadingRow]=React.useState([{id:1}])
  const [rowCount, addRowCount]=React.useState(2);
  const [ingredientsList, setIngredientsList]= React.useState([]);
  const [netValue,setNetValue ]=React.useState(  Number(0));
  const [storedNetValue,setTotalnetValue ]=React.useState(Number(0));
  const [formulatioProcess,SetFormulationProcess]=React.useState([])
  const [ingredientPercentage,setIngredientPercentage]=React.useState([])
  const [prodProcStages, setProdProcStages]=useState([])
  const[stepsList, setStepList]=useState([])
  const [packingSteps,setPackingSteps]=useState([])
 
  const yeild= Number( (Number(storedNetValue) + Number(netValue))/200) * Number(selectedBatch?.plan_quantity);
 
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }
  
  
 
  function setValue(value,id)
  {
    console.log(value)
  }
  



  


 
   
 


  useEffect(() => {
    GET_PRODUCTION_BATCH_BY_ID(id).then((resp) => {


      setSelectedBatch(resp);

      GET_PRODUCT_FORMULATION_BY_ID(resp.formulation_id).then((resp)=>{
        
  
       
          setIngredientPercentage(resp.data?.data[0]?.prod_proc_process[0]?.process_data?.prodProcIngredients)
          SetFormulationProcess([resp.data?.data[0]?.prod_proc_process]);
          setProdProcStages(resp.data?.data[0]?.prod_proc_process[2]?.process_data?.prodProcStages)
          console.log(resp.data?.data[0]?.prod_proc_process[5]?.process_data?.prodProcMaterials)
          setPackingSteps(resp.data?.data[0]?.prod_proc_process[5]?.process_data?.prodProcMaterials)

      })

            
    });
  },[id]);

  useEffect(()=>{
  
    
    prodProcStages.map(stage =>(
      GET_PRODUCTION_BATCH_STAGES(stage.id).then(resp=>{
      setStepList(current =>[...current,resp])
   
      
      
      })
    ))
   


 
  },[prodProcStages])
  useEffect(()=>{
    GET_INGREDIENT_MASTER().then((resp)=>{
  
      setIngredientsList(resp.data.data)
     
    })

  },[])
 

  useEffect(()=> {

  
    GET_PRODUCTION_BATCH_BY_INGREDIENTS().then((resp)=>{
        
      setIngredientData(resp);  
    })
  
   },[])

   useEffect(()=> {

  
    GET_PRODUCTION_BATCH_CHECKLIST().then((resp)=>{
      
      setCheckList(resp);

    })
   },[])

   useEffect(()=> {

  
    GET_PRODUCTION_BATCH_GUIDELINES().then((resp)=>{
     setGuidelines(resp);     

    })
   },[])
 
 
  const handleChange = (panel) => (event, newExpanded) => {

    setExpanded(newExpanded ? panel : false);
    if (expanded !== panel) {
      handleGuidelinesStatus();
    }
  };

  const handleGuidelinesStatus = () => {
    setGuidelinesOpen((open) => !open);
  };
  const addRow = () =>{
      addRowCount(rowCount + 1);
      addUnloadingRow(current =>[...current,{id:rowCount}])
      setTotalnetValue(Number(storedNetValue)+ Number(netValue));
  
      setNetValue(0)
      
  };
  const deleteRow=(e)=>{
   console.log(e)
   addUnloadingRow(unloadingRow.filter(items=>items.id !== e))
  
  }


  const accordionData = [
  {
    heading: "Batch Details",

    panel: "panel1",
    value: <CheckList data={checkListData} p_id= {processID}/>,
  },
  {
    heading: "Ingredient Dispensing",
    process_id:1,
    panel: "panel2",
    value: (
      <div style={{height: "300px", overflow: "scroll"}}>
        <CheckList data={checkListData} p_id= {1} />,
        <Box  lg={12} container mt={2} spacing={2}>
      

        {ingredientData.filter(ingredient =>ingredient.batch_id === selectedBatch.id).map(ingredient => (

          
          <Grid  mt={5}  item container spacing={3}  xs={12} sm={12} lg={12}>
                <Grid item xs={12} sm={6} lg={6}>
                      <Stack direction="row" >
                      <Grid container spacing={2}>
                      <Grid item xs={6}>
                       {ingredientsList.filter(ingredientname =>ingredient.pp_ingredient_id === ingredientname.id ).map(ingredientname =>(

                        <Typography  sx={{ typography: 'body2',marginTop:2.6}}>
                          {/* {} */}
                          {ingredientname.name}
                         </Typography>

                       ))} 
                        
                         </Grid>
                      <Grid item xs={3}>
                      <Stack  direction="column">
                        <Typography sx={{ typography: 'body2' ,fontWeight: '600'}}>
                          %
                         </Typography>
                         {ingredientPercentage.filter(ingredient_p =>ingredient.pp_ingredient_id === ingredient_p.ingredient_id).map(ingredientpvalue =>(

                       
                          <input
                        
                            value={ingredientpvalue.quantity_pc}
                  
                           />





                           
))} 
                         
                      
                      </Stack>
                      </Grid>
                     <Grid item xs={3}>


                     <Stack  direction="column">
                        <Typography sx={{ typography: 'body2' ,fontWeight: '600'}}>
                          PQ
                         </Typography>
                         {ingredientPercentage.filter(ingredient_p =>ingredient.pp_ingredient_id === ingredient_p.ingredient_id).map(ingredientpvalue =>(
                        <input
               
                  
                    value={(ingredientpvalue.quantity_pc)/100 * selectedBatch.plan_quantity}
                    style={{
                      
                    }}
                  />
                   ))} 
                        </Stack>
  
                    </Grid>
                    </Grid>                   

                      </Stack>

                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                      <Stack spacing={2}  mt={2.5}direction="row" >
                      <Grid container   spacing={2}>
                      <Grid item xs={4}  sm="auto" lg="auto">
                    <Stack  spacing={0.5} direction="row">
                    <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                          AQ:
                         </Typography>
                        <input
                    // value={e.AQ}
                    value={ingredient.issued_qty}
                    style={{
                      fontSize:"13px",
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center"
                    }}
                  />
                    </Stack>
                         </Grid>
                         <Grid item  xs={4}  sm="auto" lg="auto">
                    <Stack spacing={0.5} direction="row">
                    <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                          AQ:
                         </Typography>
                        <input
                    value={ingredient.ar_number}
                    style={{
                      fontSize:"13px",
                      border: "1px solid black",
                      width: "70px",
                      textAlign: "center"
                    }}
                  />
                    </Stack>
                         </Grid>
                         <Grid item   xs={4}  sm="auto" lg="auto">
                    <Stack direction="row">
                    <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                          G:
                         </Typography>
                        <input
                    value={ingredient.gross_wt}
                    style={{
                      fontSize:"13px",
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center"
                    }}
                  />
                    </Stack>
                         </Grid>
                         <Grid item  xs={4}  sm="auto" lg="auto">
                    <Stack spacing={0.5} direction="row">
                    <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                          T: 
                         </Typography>
                        <input
                    value={ingredient.tare_wt}
                    style={{
                      fontSize:"13px",
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center"
                    }}
                  />
                    </Stack>
                         </Grid>

                         <Grid item xs={4}  sm="auto" lg="auto" >
                    <Stack direction="row">
                    <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                          N:
                         </Typography>
                        <input
                    value={ingredient.net_wt}
                    style={{
                      fontSize:"13px",
                      border: "1px solid black",
                      width: "50px",
                      textAlign: "center"
                    }}
                  />
                    </Stack>
                         </Grid>
                         <Grid item xs={4} sm="auto" lg="auto" >
                         {observation1 ? (
          <CheckCircle  onClick={() => observation1 ? setObservation1(false): setObservation1(true)} style={{ color: "green[600]", marginRight: "5px" }} />
        ) : (
          <Circle
                onClick={() => observation1 ? setObservation1(false): setObservation1(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        {observation2 ? (
          <CheckCircle 
          onClick={() => observation2 ? setObservation2(false): setObservation2(true)}
          style={{ color: "green[600]", marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => observation2 ? setObservation2(false): setObservation2(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        <button onClick={props.openModal}>
          <AddCircleTwoTone style={{ color: "#808080", marginRight: "5px" }} />
        </button> 
                         </Grid>   
                    </Grid>                   

                      </Stack>

                </Grid>


                
            </Grid>
           ))}


        </Box>
      </div>
    ),
  },
  {
    heading: "Product Manufacturing",
    process_id:2,
    panel: "panel3",
    value: (
      <div style={{height: "300px", overflow: "scroll"}}>
     
        <CheckList data={checkListData} p_id= {2} />
        
             
       
              <Stack direction="column">
              {stepsList.map((step) => (
              <Grid container mt={2} alignItems="center" spacing={3}>
              <Grid item xs={6.8}>
        <Typography variant="subtitle1">{step.text}</Typography>
      </Grid>
  <Grid item xs={2}>
  <LocalizationProvider  key={step.id}size="small" dateAdapter={AdapterDayjs}>
  <DateTimePicker
          label="From"
          value={dateWithNoInitialValue}
          onChange={(newValue) =>setValue(newValue,step.id)}
       
          renderInput={(params) => (
         
            <TextField {...params}  size="small"/>
          )}
        />
    </LocalizationProvider>
  </Grid>
  <Grid item xs={2}>
  <LocalizationProvider key={step.id} size="small" dateAdapter={AdapterDayjs}>
  <DateTimePicker
           label="To"
          value={dateWithNoInitialValue}
          onChange={(newValue) => setValue(newValue,step.id)}
          renderInput={(params) => (
            <TextField {...params} size="small" />
          )}
        />
        
    </LocalizationProvider>
  </Grid>
  <Grid item xs={2} sm="auto" lg="auto" >
                         {observation1 ? (
          <CheckCircle  onClick={() => observation1 ? setObservation1(false): setObservation1(true)} style={{ color: "green[600]", marginRight: "5px" }} />
        ) : (
          <Circle
                onClick={() => observation1 ? setObservation1(false): setObservation1(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        {observation2 ? (
          <CheckCircle 
          onClick={() => observation2 ? setObservation2(false): setObservation2(true)}
          style={{ color: "green[600]", marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => observation2 ? setObservation2(false): setObservation2(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        <button onClick={props.openModal}>
          <AddCircleTwoTone style={{ color: "#808080", marginRight: "5px" }} />
        </button> 
                         </Grid> 

</Grid>
              ))}
              </Stack>
      
      </div>
    ),
  },
  {
    heading: "Product Unloading",
    process_id:3,
    panel: "panel4",
    value: (
      <div >
      <Grid  sx={{padding:"10px"}}container spacing={2}>
      {/* <Grid item xs={12} md={1}></Grid> */}
  <Grid item xs={12} md={12}>
  <TableContainer  >
      <Table sx={{ minWidth: 650}} className="table-auto" aria-label="simple table">
        <TableHead  style={{maxWidth:10}}>
          <TableRow className="w-10" >
            <TableCell align="left">Cont No</TableCell>
            <TableCell align="center">Gross Wt</TableCell>
            <TableCell className="w-10" align="left">Tare Wt</TableCell>
            <TableCell  align="left">Net Wt</TableCell>
            <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
             <TableCell align="left"></TableCell>
           
      
        
            
          </TableRow>
        </TableHead>
        <TableBody>
          {unloadingRow.map((row) => (
            <TableRow
         
             
            >
              <TableCell  component="th" scope="row">
              <input  style={{textAlign:"center"}}value={row.id} className="shadow appearance-none border rounded w-20 pb-0 mb-0 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
              </input>
              </TableCell>
              <TableCell align="center">


              <input className="shadow appearance-none border rounded w-20 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
              </input>
              </TableCell>
              <TableCell align="left">

              <input className="shadow appearance-none border rounded w-20 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
              </input>
              </TableCell>
              <TableCell align="left">
              <input  onChange={e=>{ setNetValue(e.target.value)
                                    
              
              }} className="shadow appearance-none border rounded w-20 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
              </input>
              
              </TableCell>
           
              <TableCell align="left">
              
               
              <button
                onClick={addRow}
                className="flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 20 20"

                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              </TableCell>
              <TableCell   align="left">
              <button
                onClick={addRow}
                className="flex items-center justify-start px-3 py-5 cursor-pointer p-1 text-green-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 20 20"

                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                   d=" M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
             </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              

             
          
            </TableRow>
          ))}

        
        </TableBody>
        <TableRow  >




</TableRow>

<TableCell align="left"></TableCell>
            
      
          
        
            <TableCell align="center"><Typography>Total Net wt <span sx={{
              fontWeight:800
            }} ><Typography sx={{ typography: 'body2',fontWeight: '600'}} >{Number(storedNetValue)+Number(netValue)} kg</Typography></span></Typography>
            
            </TableCell>
            <TableCell align="center"> <Typography > Yeild <span ><Typography sx={{ typography: 'body2',fontWeight: '600'}}>{yeild} %</Typography></span></Typography>
                        </TableCell>
            <TableCell    align="center"><Typography >Planned Quantity <span sx={{
              fontWeight:800
            }} ><Typography sx={{ typography: 'body2',fontWeight: '600'}} >{selectedBatch?.plan_quantity}</Typography></span></Typography>
            </TableCell>
            <TableCell></TableCell>
      </Table>
     
    </TableContainer>
  </Grid>
  <Grid item xs={6} md={4}>
   
  </Grid>
  </Grid>
         

    </div>),
  },
  {
    heading: "Packing Material Dispensing",
    process_id:4,
    panel: "panel5",

    value:(
        <div>
    
     <CheckList data={checkListData}  p_id= {4}/>
     <TableContainer sx={{marginTop:5}}component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                          Names Of The Packing Materials
                         </Typography></TableCell>
            <TableCell align="left">
            <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
            Ar.No
                         </Typography></TableCell>
            <TableCell align="left">
            <Typography sx={{ typography: 'body2',fontWeight: '600'}}>
                        Qty issued
                         </Typography></TableCell>
                         <TableCell></TableCell>
                         <TableCell></TableCell>
                         <TableCell></TableCell>
                         
                         

    
          </TableRow>
        </TableHead>
        <TableBody>
          {packingSteps.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="subtitle1"> {row?.pp_materials_sku_id?.name}</Typography>
               
              </TableCell>
              <TableCell align="left"><input  style={{textAlign:"center"}} className="shadow appearance-none border rounded w-20 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
            </input>
            </TableCell>
              <TableCell align="left"><input  style={{textAlign:"center"}} className="shadow appearance-none border rounded w-20 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text">
            </input>
            </TableCell>
              <TableCell>
                <div>
                {observation1 ? (
          <CheckCircle  onClick={() => observation1 ? setObservation1(false): setObservation1(true)} style={{ color: "green[600]", marginRight: "5px" }} />
        ) : (
          <Circle
                onClick={() => observation1 ? setObservation1(false): setObservation1(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        {observation2 ? (
          <CheckCircle 
          onClick={() => observation2 ? setObservation2(false): setObservation2(true)}
          style={{ color: "green[600]", marginRight: "5px" }} />
        ) : (
          <Circle
            onClick={() => observation2 ? setObservation2(false): setObservation2(true)}
            style={{ color: '#808080', marginRight: "5px" }}
          />
        )}
        <button onClick={row.openModal}>
          <AddCircleTwoTone style={{ color: "#808080", marginRight: "5px" }} />
        </button> 

                </div>
              </TableCell>

                         <TableCell>
              
                         </TableCell>
                         <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
    )
  },
  {
    heading: "Cleaning & Inspection",
    process_id:5,
    panel: "panel6",
    value: <CheckList data={checkListData}  p_id= {5} />,
  },
  {
    heading: "Filling & Packing",
    process_id:6,
    panel: "panel7",
    value: <CheckList data={checkListData} p_id= {6} />,
  },
];


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

      {isGuidelinesOpen && <Guidelines handleClose={handleGuidelinesStatus} data={guidelinesData} p_id={processID}/>}

      <Grid container spacing={2} p={2}>
      <Typography sx={{paddingTop:3,paddingBottom:1}}>Batch Details</Typography>
        <Grid container spacing={2}>
  <Grid item xs={6}>
  <Grid item width="100%">
          
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
              header="SKU"
              value={selectedBatch?.production_batch_sku_id?.name}
            />
          
          </div>
        </Grid>
  </Grid>
  <Grid item xs={6}>
  <Grid item width="100%">
          
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
              header="MFU"
              value={selectedBatch?.mfu}
            />
            <RenderHeaderAndValue
              header="Plan StartDate"
              value={moment(selectedBatch?.plan_startdate).format("DD/MM/YYYY")}
            />
            <RenderHeaderAndValue
              header="Plan EndDate"
              value={moment(selectedBatch?.plan_enddate).format("DD/MM/YYYY")}
            />
           
              <RenderHeaderAndValue
              header="Plan Quantity"
              value={`${selectedBatch?.plan_quantity} ${selectedBatch?.production_batch_uom?.label}`}
            />
            <RenderHeaderAndValue
              header="Actual Quantity"
              value={selectedBatch?.mfu_id}
            />
          
          </div>
        </Grid>
  </Grid>

</Grid>
        
        {accordionData.slice(1).map((item, i) => (
          <Grid item width="100%"
                onClick={()=>{
                 setprocessID(item.process_id);
                
              }}
          
           >
            <Accordion
               onClick={()=>{
                 setprocessID(item.process_id);
                
              }}
              expanded={expanded === item.panel}
              onChange={handleChange(item.panel)}         
            >
              <AccordionSummary
                aria-controls={`${item.panel}d-content`}
                id={`${item.panel}d-header`}
          
              >
                <Typography >{item.heading}</Typography>
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
