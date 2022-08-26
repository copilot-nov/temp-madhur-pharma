import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/alert";
import Navbar from "../../components/navbar";
import ProductionBatch from "../../components/productionBatchList/AddProductionBatch";
import EditDeleteActionBatchProduction from "../../components/productionBatchList/EditDeleteBatchProduction";

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
const MobileView = ({ data = [], navigate }) =>
  data.map((obj) => (
    <div
      key={obj.id}
      className="xl:basis-1/3 lg:basis-1/2 sm:basis-full"
      style={{
        borderRadius: "3px",
        marginTop: "10px",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/production/${obj.id}`);
        }}
        className="flex flex-wrap"
        style={{
          fontSize: "14px",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          marginRight: "5px",
        }}
      >
        <div className="flex justify-end w-full">
          <EditDeleteActionBatchProduction
            type="order"
            url={`/order/master/${obj?.id}`}
            row={obj}
            Id={obj?.id}
          />
        </div>
        <RenderHeaderAndValue header="Batch ID" value={obj?.batch_code} />
        <RenderHeaderAndValue
          header="Status"
          value={obj?.production_batch_status?.label}
        />
        <RenderHeaderAndValue
          header="Product"
          value={obj?.production_batch_product_id?.name}
        />
        <RenderHeaderAndValue header="Customer" value={obj?.emp_id} />
        <RenderHeaderAndValue
          header="Start Date"
          value={moment(obj?.plan_startdate).format("DD/MM/YYYY")}
        />
        <RenderHeaderAndValue
          header="Quantity"
          value={`${obj?.plan_quantity} ${obj?.production_batch_uom?.label}`}
        />
      </div>
    </div>
  ));

const Productionlayout = (props) => {
  const { productionBatchList } = props;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [handleResponse, setHandleResponse] = useState(null);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
    // setHandleResponse(null)
  }

  return (
    <div>
      <Navbar current={"/production"} />
      <div className="grid grid-cols-6 gap-6 sm:mx-6 mx-2 mt-8">
        <div className="col-span-6 sm:col-span-3">
          {handleResponse !== null && (
            <Alert type={handleResponse?.status} msg={handleResponse?.msg} />
          )}
          <div className="flex items-center justify-start">
            <div className="sm:w-80 w-full">
              <input
                type="text"
                placeholder="Search bar"
                className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 w-full h-10 px-2 py-1"
              />
            </div>
            <div>
              <button
                onClick={openModal}
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
            </div>
            <ProductionBatch
              open={open}
              closeModal={closeModal}
              setOpen={setOpen}
              handleResponse={handleResponse}
              setHandleResponse={setHandleResponse}
            />
          </div>
        </div>
      </div>
      <div className="px-2 mt-6 shadow flex flex-wrap">
        <MobileView data={productionBatchList} navigate={navigate} />
      </div>
      {/* <AlertMsgComponent /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productionBatchList: state?.ProductionReducer.productionBatchList,
  };
};

export default connect(mapStateToProps, null)(Productionlayout);
