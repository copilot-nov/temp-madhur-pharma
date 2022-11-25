import axios from "axios"
import { toast } from 'react-toastify';
import { styleToastify } from '../../../utility/styleToastify'

const baseUrl = process.env.REACT_APP_BASE_URL

const getHeaders = () => {
    return {
        "Authorization": `${localStorage.getItem("token")}`,
        'accept': 'application/json',
    }
}

export const GET_PRODUCTION_BATCH_LIST = () => {
    let url = `${baseUrl}/production_batch`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_BATCH_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_PRODUCTION_BATCH_STAGES=async(id)=>{

 let  url= `${baseUrl}/manufacturing-template/prod_proc_procedure/${id}`
 try 
 {
     let res= await axios.get(url,{headers:getHeaders()})
     if(res?.data?.success)
     {
          return res.data.data;

     }
     else {
      toast.info(res.data?.msg, styleToastify);
      return false
  }
 }
 catch (error) {
  toast.error((error.message).replace(/\\/g, ""), styleToastify);
}


}

export const GET_PRODUCTION_BATCH_BY_INGREDIENTS = async() =>
{
   let url= `${baseUrl}/manufacturing-template/prod_batch/ingredients`
   try 
   {
       let res= await axios.get(url,{headers:getHeaders()})
       if(res?.data?.success)
       {
            return res?.data.data;

       }
       else {
        toast.info(res.data?.msg, styleToastify);
        return false
    }
   }
   catch (error) {
    toast.error((error.message).replace(/\\/g, ""), styleToastify);
}
}


export const GET_PRODUCTION_BATCH_CHECKLIST = async() =>
{
   let url= `${baseUrl}/manufacturing-template/prod_proc_checklist`
   try 
   {
       let res= await axios.get(url,{headers:getHeaders()})
       if(res?.data?.success)
       {
            return res.data.data;

       }
       else {
        toast.info(res.data?.msg, styleToastify);
        return false
    }
   }
   catch (error) {
    toast.error((error.message).replace(/\\/g, ""), styleToastify);
}
}


export const GET_PRODUCTION_BATCH_GUIDELINES = async() =>
{
   let url= `${baseUrl}/manufacturing-template/prod_proc_guidelines`
   try 
   {
       let res= await axios.get(url,{headers:getHeaders()})
       if(res?.data?.success)
       {
            return res.data.data;

       }
       else {
        toast.info(res.data?.msg, styleToastify);
        return false
    }
   }
   catch (error) {
    toast.error((error.message).replace(/\\/g, ""), styleToastify);
}
}


export const GET_INGREDIENT_MASTER= async()=>{
  let url = `${baseUrl}/ingredient/master`
  try{
        let res=await axios.get(url,{headers:getHeaders()})
        if(res?.data?.success)
        {
            return res;
        }
        else{
            toast.info(res.data?.msg, styleToastify);
            return false

        }

  }
  catch (error) {
    toast.error((error.message).replace(/\\/g, ""), styleToastify);
}

}

export const GET_PRODUCTION_BATCH_BY_ID = async (production_batch_id) => {
    let url = `${baseUrl}/production_batch/${production_batch_id}`
    try {
        let res = await axios.get(url, { headers: getHeaders() })
        if (res?.data?.success) {
            return res?.data?.data[0]
        } else {
            toast.info(res.data?.msg, styleToastify);
            return false
        }
    }
    catch (error) {
        toast.error((error.message).replace(/\\/g, ""), styleToastify);
    }

}
console.log("outside add add batch function")

// const payload1 = {
//     "production_batch_id": "1",
//     "production_batch_name": "kartik",
//     "production_batch_description": "kartik",
//     "production_batch_status": "kartik",
//     "production_batch_start_date": 13-11-2022,
//     "production_batch_end_date": 15-11-2022,
//     "production_batch_quantity": "1",
//     "production_batch_unit": "111",
//     "production_sku_id": "1",
//     "production_formulation_id": "1",
//     "production_price": "1",

// }


export const ADD_PRODUCTION_BATCH = (payload) => {


    let url = `${baseUrl}/production_batch/create`
    return async dispatch => {
        try {
            console.log("try block")
            let res = await axios.post(url, payload, { headers: getHeaders() })
            console.log("above if block")
            if (res?.data.success) {
                console.log("inside if block")
                dispatch(GET_PRODUCTION_BATCH_LIST())
                toast.success(('Production Batch Added successfully!').replace(/\\/g, ""), styleToastify);
                return { success: true };
            } else {
                console.log("inside  else block")
                return { status: 'info', msg: res.data?.msg, success: false };
            }
        }
        catch (error) {
            console.log("handling error")
            return { status: 'error', msg: (error.message).replace(/\\/g, ""), success: false };
        }
    }
}
export const UPDATE_PRODUCTION_BATCH = (payload, Id) => {
    let url = `${baseUrl}/production_batch/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_BATCH_LIST())
                return (toast.success(('Production Batch Added successfully!').replace(/\\/g, ""), styleToastify))
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const SAVE_EACH_INGREDIENT=async(payload)=>{
    console.log(payload)

    let url =  'http://localhost:5000/manufacturing-template/prod_batch/ingredients/create'
     let res=axios.post(url,payload,{headers:getHeaders()}).then(res => console.log("posting data:", res))
     return(res);

    }

export const DELETE_MODULE_FROM_PRODUCTION_BATCH = (deletepath) => {
    let url = `${baseUrl}/production_batch/${deletepath}`
    return async dispatch => {
        try {
            let res = await axios.delete(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_BATCH_LIST())
                return { status: 'success', msg: 'Item Deleted successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}