import React from 'react';
import AddModal from '../../components/addmodal';
import Navbar from '../../components/navbar'
import TextInput from '../../components/searchInput';
import SelectModule from '../../components/selectInput';
import TailwindTableCss from '../../components/tailwind-table';
import TableActionCell from '../../components/tailwind-table/tableActionCell'

const Homelayout = (props) => {
    const { data } = props
    return (
        <div>
            <Navbar />
            <div className='sm:mx-6 mx-2 mt-10'>
                <SelectModule selectMenulist={selectMenulist} />
            </div>
            <div className="grid grid-cols-6 gap-6 sm:mx-6 mx-2 mt-8">
                <div className="col-span-6 sm:col-span-3">
                    <div className='flex items-center justify-start'>
                        <TextInput />
                        <AddModal
                            titleModal='Add'
                            classes='flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900'
                            btnTitle={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            }
                        />
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <div className='flex items-center justify-center'>
                        {/* <TablePagination /> */}
                    </div>
                </div>
            </div>
            <div className='sm:mx-6 mx-2 mt-6 shadow'>
                <TailwindTableCss columns={columns} data={data} />
            </div>
            {/* <AlertMsgComponent /> */}
        </div>
    );
};

export default Homelayout;

// AdminReducer
const selectMenulist = [
    { name: 'Select Module' },
    { name: 'Customer Management' },
    { name: 'User Management' },
    { name: 'Process Management' },
    { name: 'Product Management' },
    { name: 'Materil Management' },
    { name: 'Ingredient Management' },
    { name: 'Order Management' },
]

const columns = [
    {
        name: "Name",
        selector: row => row.Name,
        sortable: true,
        // style: {
        //     display: 'flex',
        //     justifyContent: 'center',
        // },
        // cell: (row) => (<span>{row?.title} {row?.id} </span>)
    },
    {
        name: "Description",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "Column 1",
        selector: row => row.Column1,
        sortable: true,
    },
    {
        name: "Column 2",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Column 3",
        selector: row => row.Column3,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => row.CreatedOn,
        sortable: true,
    },
    {
        name: "Created By",
        width: '130px',
        selector: row => row.CreatedBy,
        sortable: true,
    }, {
        name: "Last Modified",
        width: '130px',
        selector: row => row.LastModified,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        // selector:row => row. "LastModified",
        // sortable: true,
        cell: (row) => (
            <TableActionCell row={row} />
        )
    },

];
