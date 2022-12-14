import React, { Fragment, useEffect, useState } from "react";
import {
  ADD_ORDER_ADMIN,
  GET_PRODUCT_FORMULATION_BY_ID,
  GET_FORMULATION_DATA,
} from "../../redux/actions/admin";
import { connect } from "react-redux";
import AutoSearch from "../autoComplete";
import { Dialog, Transition } from "@headlessui/react";
import { ADD_PRODUCTION_BATCH } from "../../redux/actions/production";
import Swal from "sweetalert2";
import { ConstructionOutlined } from "@mui/icons-material";

const defaultState = {};

const ProductionBatch = (props) => {
  const {
    open,
    closeModal,
    setOpen,
    materialList,
    masterDataList,
    productList,
    orderList,
    ADD_PRODUCTION_BATCH,
    setHandleResponse,
    handleResponse,
  } = props;
  let UOMList = masterDataList?.filter((item) => item?.type_id === 32);
  let MFUList = masterDataList?.filter((item) => item?.type_id === 28);
  let filterMaterialList = materialList?.filter((item) => item.sku === true);
  const [payload, setPayload] = useState(defaultState);
  const [payload1, setPayload1] = useState(defaultState);
  const [SKU, setSKU] = useState(filterMaterialList);
  const [UOM, setUOM] = useState(UOMList);
  const [Product, setProduct] = useState(productList);
  const [MFU, setMFU] = useState(MFUList);
  const [filteredFormulationData, setFilteredFormulationData] = useState([]);
  const [FormulationDataList, setFormulationDataList] = useState([]);
  const [FormulationID, setFormulationID] = useState(filteredFormulationData);

  

  useEffect(() => {
    GET_FORMULATION_DATA().then((resp) => {
      console.log(resp.data);
      setFormulationDataList(resp.data);
    });
  }, []);

  const handleOnChange = (e) => {
    let { name, value, type } = e.target

    setPayload({
      ...payload,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  //console.log("setPayload", payload.plan_startdate);


  const handlePrevDate = (e) => {
    let { name, value, type } = e.target

    // let value = new Date();
    // let date = new Date();

    // let currentValue = e.target.value;
    // let minVal = new Date(
    //   date.getFullYear(),
    //   date.getMonth(),
    //   date.getDate()
    // )
    //   .toISOString()
    //   .split("T")[0];
    // if (new Date(currentValue) < new Date(minVal)) {
    //     value = new Date();
    //   alert("Please do not enter date in past");
    // }
    // if (new Date(currentValue) > new Date()) {
    //   value = e.target.value;
    // }
    // e.target.value = value;
    // console.log("value", e.target.value);
    if(payload.plan_startdate == undefined){
        alert("Please select start date frist");
    }
        
    if(e.target.value <  payload.plan_startdate){
        alert("Please do not enter date in past");      
    }

    else if(e.target.value >=  payload.plan_startdate){
        setPayload1({
            ...payload1,
            [name]: type === "number" ? Number(value) : value,
          });

    }




//     else{
//     //     setPayload({
//     //   ...payload,
//     //   [name]: type === "number" ? Number(value) : value,
//     // });
//     setPayload1({
//         ...payload1,
//         [name]: type === "number" ? Number(value) : value,
//         });
//   }
    };

   // console.log("setPayload1", payload1.plan_enddate);


  const fetchFormulationList = (e) => {
    const filteredFormulationList = FormulationDataList.filter(
      (product) => product.product_id === e
    );

    setFilteredFormulationData(filteredFormulationList);
  };
  const closeModalBox = (e) => {
    Swal.fire({
      text: "Are you sure you want to exit ?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
    }).then((res) => {
      if (res.value) {
        closeModal();
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let copypayload = payload;
   // copypayload.po_id = POID?.po_id;
    copypayload.sku_id = SKU?.id;
    copypayload.product_id = Product?.id;
    copypayload.uom = UOM?.data_code;
    copypayload.mfu = MFU?.id;
    copypayload.formulation_id = FormulationID?.id;

    let istrue = await ADD_PRODUCTION_BATCH(copypayload);
    if (istrue?.success) {
      setPayload(defaultState);
      setHandleResponse(istrue);
      setOpen(false);
    } else {
      setHandleResponse(istrue);
    }
  };

  return (
    <div>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="mx-1 border-b border-gray-900 text-lg font-medium text-green-900 sm:px-6 px-2 py-2"
                  >
                    Add New Production Batch
                  </Dialog.Title>
                  <div className="md:col-span-3">
                    <form onSubmit={handleSubmit} action="#" method="POST">
                      <div className="overflow-hidden">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-2 sm:gap-4">
                            <div className="col-span-6 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  Batch Name
                                </p>
                                <input
                                  style={{ width: 300 }}
                                  required
                                  name="batch_code"
                                  onChange={handleOnChange}
                                  // defaultValue={payload?.po_id}
                                  className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  PO ID
                                </p>
                                {/* <AutoSearch
                                  data={orderList}
                                  keyname="po_id"
                                  valuename="id"
                                  selected={POID}
                                  setSelected={setPOID}
                                /> */}

                                 <input
                                  style={{ width: 300 }}
                                  required
                                  name="po_id"
                                  onChange={handleOnChange}
                                  // defaultValue={payload?.po_id}
                                  className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                              <div
                                div
                                onSelect={() => {
                                  if (Product?.id) {
                                    fetchFormulationList(Product?.id);
                                  }
                                }}
                                className="w-full items-center"
                              >
                                <p className="block text-sm font-medium text-gray-900">
                                  Product Name
                                </p>

                                <AutoSearch
                                  data={productList}
                                  keyname="name"
                                  valuename="id"
                                  selected={Product}
                                  setSelected={setProduct}
                                />
                              </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                              <div
                                className="w-full items-center"
                                onClick={() => {
                                  // console.log(ProductID)
                                }}
                              >
                                <p className="block text-sm font-medium text-gray-900">
                                  Formulation Name
                                </p>

                                <AutoSearch
                                  data={filteredFormulationData}
                                  keyname="name"
                                  valuename="id"
                                  selected={FormulationID}
                                  setSelected={setFormulationID}
                                />
                              </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  SKU
                                </p>
                                <AutoSearch
                                  data={filterMaterialList}
                                  keyname="name"
                                  valuename="id"
                                  selected={SKU}
                                  setSelected={setSKU}
                                />
                              </div>
                            </div>

                           


                            <div className="col-span-6 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  Quantity
                                </p>
                                <input
                                  style={{ width: "100%" }}
                                  required
                                  //type="number"
                                  name="plan_quantity"
                                  onChange={handleOnChange}
                                
                                  className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            
                            <div className="col-span-4 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  UOM
                                </p>
                                <AutoSearch
                                  data={UOMList}
                                  keyname="label"
                                  valuename="id"
                                  selected={UOM}
                                  setSelected={setUOM}
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  Units
                                </p>
                                <input
                                  style={{ width: "100%" }}
                                  required
                                 // type="number"
                                  name="units"
                                  onChange={handleOnChange}
                                  // defaultValue={payload?.po_id}
                                  className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  Unit Price
                                </p>
                                <input
                                  style={{ width: "100%" }}
                                  required
                                  //type="number"
                                  name="unit_price"
                                  onChange={handleOnChange}
                                  // defaultValue={payload?.po_id}
                                  className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  MFU
                                </p>
                                <AutoSearch
                                  data={MFUList}
                                  keyname="label"
                                  valuename="id"
                                  selected={MFU}
                                  setSelected={setMFU}
                                />
                              </div>
                            </div>


                            <div className="col-span-4 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  Start Date
                                </p>
                                <input
                                  required
                                  type="date"
                                  name="plan_startdate"
                                  onChange={handleOnChange}
                                  // defaultValue={payload?.order_date}
                                  className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                              <div className="w-full items-center">
                                <p className="block text-sm font-medium text-gray-900">
                                  End Date
                                </p>
                                <input
                                  required
                                  type="date"
                                  name="plan_enddate"
                                  //onChange={handlePrevDate}
                                           onChange={handleOnChange}
                                  // defaultValue={payload?.order_date}
                                  className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                              </div>
                            </div>
                            {/* <div className="col-span-4 sm:col-span-3">
                                                            <div className='w-full items-center'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Status
                                                                </p>
                                                                <AutoSearch data={masterDataList} keyname='label' valuename='id' selected={status} setSelected={setStatus} />
                                                            </div>
                                                        </div> */}
                            <div className="col-span-6 sm:col-span-6">
                              <div className="w-full items-start">
                                <p className="block text-sm font-medium text-gray-900">
                                  description
                                </p>
                                <textarea
                                  rows={2}
                                  id="description"
                                
                                  name="description"
                                  onChange={handleOnChange}
                                  // defaultValue={payload?.description}
                                  className="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-900"
                                />
                              </div>
                            </div>
                            {/* <div className="col-span-6 sm:col-span-6">
                                                            <div className='w-full items-start'>
                                                                <p className="block text-sm font-medium text-gray-900">
                                                                    Notes
                                                                </p>
                                                                <textarea
                                                                    rows={2}
                                                                    id="notes"
                                                                    required
                                                                    name="notes"
                                                                    // onChange={handleOnChange}
                                                                    defaultValue={payload?.notes}
                                                                    className="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-900"
                                                                />
                                                            </div>
                                                        </div> */}
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            onClick={() => {
                              closeModalBox();
                            }}
                            className="mr-2 inline-flex justify-center py-2 px-8 border border-green-900 shadow-sm text-sm font-medium text-green-900 bg-white hover:bg-green-100 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    materialList: state?.AdminReducer.materialList,
    masterDataList: state?.AdminReducer.masterDataList,
    productList: state?.AdminReducer.productList,
    orderList: state?.AdminReducer.orderList,
  };
};
export default connect(mapStateToProps, { ADD_PRODUCTION_BATCH })(
  ProductionBatch
);
