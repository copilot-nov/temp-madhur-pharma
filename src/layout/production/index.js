import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddModal from '../../components/addmodal';
import { Alert } from '../../components/alert';
import Navbar from '../../components/navbar';
import ProductionBatch from '../../components/productionBatchList/AddProductionBatch';
import EditDeleteActionBatchProduction from '../../components/productionBatchList/EditDeleteBatchProduction';
import TextInput from '../../components/searchInput';
// import SelectManagmentType from '../../components/SelectManagmentType';
import TailwindTableCss from '../../components/tailwind-table';
// import { selectModuleColumn } from '../../utility/selectModuleColumn';

let ProductionBatchColumn = [
  {
    name: 'Batch Name',
    selector: (row) => row.batch_code,
    sortable: true
  },
  {
    name: 'PO ID',
    width: '130px',
    selector: (row) => row.po_id,
    sortable: true
  },
  {
    name: 'Product Name',
    selector: (row) => row.production_batch_product_id?.name,
    sortable: true
  },
  {
    name: 'Quantity',
    width: '130px',
    selector: (row) => `${row.plan_quantity}  ${row.production_batch_uom?.label}`,
    sortable: true
  },
  {
    name: 'SKU',
    selector: (row) => row.production_batch_sku_id?.name,
    sortable: true
  },
  {
    name: 'Units',
    width: '130px',
    selector: (row) => row.units,
    sortable: true
  },
  {
    name: 'Status',
    width: '140px',
    selector: (row) => row.production_batch_status?.label,
    sortable: true
  },
  {
    name: 'Start Date',
    width: '130px',
    selector: (row) => moment(row.plan_startdate).format('DD/MM/YYYY'),
    sortable: true
  },
  {
    name: 'Created by',
    width: '160px',
    selector: (row) => row.production_batch_createdBy?.created_by,
    sortable: true
  },
  {
    name: 'Action',
    width: '130px',
    cell: (row) => (
      <EditDeleteActionBatchProduction
        type="order"
        url={`/order/master/${row?.id}`}
        row={row}
        Id={row?.id}
      />
    )
  }
];

const MobileView = ({ data = [], navigate }) =>
  data.map((obj) => (
      <div onClick={() => navigate(`/production/${obj.id}`)} key={obj.id} style={{ paddingInline: '5px', backgroundColor: '#f0f0f0', marginTop: '10px' }}>
        <div style={{ fontSize: '14px', display: 'flex', padding: '10px', flexWrap: 'wrap' }}>
          <div style={{ width: '50%', display: 'flex' }}>
            <div style={{ width: '50%', fontWeight: 'bold' }}>Batch ID</div>
            <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{obj?.batch_code}</div>
          </div>
          <div style={{ width: '50%', display: 'flex' }}>
            <div style={{ width: '50%', fontWeight: 'bold' }}>Status</div>
            <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{obj?.status}</div>
          </div>
          <div style={{ width: '50%', display: 'flex' }}>
            <div style={{ width: '50%', fontWeight: 'bold' }}>Product</div>
            <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{obj?.production_batch_product_id?.name}</div>
          </div>
          <div style={{ width: '50%', display: 'flex' }}>
            <div style={{ width: '50%', fontWeight: 'bold' }}>Customer</div>
            <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{obj?.emp_id}</div>
          </div>
          <div style={{ width: '50%', display: 'flex' }}>
            <div style={{ width: '50%', fontWeight: 'bold' }}>Start Date</div>
            <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{moment(obj?.plan_startdate).format('DD/MM/YYYY')}</div>
          </div>
          <div style={{ width: '50%', display: 'flex' }}>
            <div style={{ width: '50%', fontWeight: 'bold' }}>Quantity</div>
            <div style={{ paddingRight: '5px', width: '50%', textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{`${obj?.plan_quantity} ${obj?.production_batch_uom?.label}`}</div>
          </div>
        </div>
      </div>
  ));

const isSmallDevice = window.matchMedia('(max-width:664px)').matches;
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
      <Navbar current={'/production'} />
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
                className="flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor">
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
      <div className="sm:mx-6 mx-2 mt-6 shadow">
        {isSmallDevice ? (
          <MobileView data={productionBatchList} navigate={navigate} />
        ) : (
          <TailwindTableCss columns={ProductionBatchColumn} data={productionBatchList} />
        )}
      </div>
      {/* <AlertMsgComponent /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productionBatchList: state?.ProductionReducer.productionBatchList
  };
};

export default connect(mapStateToProps, null)(Productionlayout);
