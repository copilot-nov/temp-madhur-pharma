import React from 'react';
import DataTable from 'react-data-table-component';

const IsSmallDevise = window.matchMedia('(max-width:664px)').matches;
const TailwindTableCss = (props) => {
    const { columns, data } = props
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                paginationPerPage={IsSmallDevise ? 5 : 10}
                paginationRowsPerPageOptions={[
                    5, 10
                ]}
                paginationComponentOptions={{ noRowsPerPage: true }}
                noHeader
                defaultSortField="id"
                pagination
                selectableRows
                defaultSortAsc={false}
                // selectableRowDisabled={false}
                // onSelectedRowsChange={handleSelectRows}
                highlightOnHover
                sortIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>}
            />
        </div>
    )
}

export default TailwindTableCss;