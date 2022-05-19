import moment from 'moment'
import TableActionCell from '../components/tailwind-table/tableActionCell'

let customerCol = [
    {
        name: "Name",
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: "City",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "Contact person",
        selector: row => row.Column1,
        sortable: true,
    },
    {
        name: "Email",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Phone",
        selector: row => row.Column3,
        sortable: true,
    },
    {
        name: "Created By",
        // width: '80px',
        selector: row => row.CreatedBy,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => row.CreatedOn,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <TableActionCell type="customer" row={row} />
        )
    },
]
let userCol = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "Empolyee id",
        selector: row => row.emp_id,
        sortable: true,
    },
    {
        name: "Designation",
        selector: row => row.designation,
        sortable: true,
    },
    {
        name: "Department",
        selector: row => row.department,
        sortable: true,
    },
    {
        name: "Email",
        selector: row => row.email,
        sortable: true,
    },
    {
        name: "Phone",
        selector: row => row.phone,
        sortable: true,
    },
    {
        name: "Created By",
        // width: '80px',
        selector: row => row.created_by,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => moment(row.created_on).format('DD/MM/YYYY'),
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <TableActionCell type="user" row={row} />
        )
    },
]

let ProductCol = [
    {
        name: "Name",
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: "Customer",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "Product code",
        selector: row => row.Column1,
        sortable: true,
    },
    {
        name: "HSN code",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Created by",
        // width: '80px',
        selector: row => row.CreatedBy,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => row.CreatedOn,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <TableActionCell type="product" row={row} />
        )
    },
]
let MaterialCol = [
    {
        name: "Name",
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: "Code",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "Capacity",
        selector: row => row.Column1,
        sortable: true,
    },
    {
        name: "UOM",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "SKU",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Created by",
        // width: '80px',
        selector: row => row.CreatedBy,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => row.CreatedOn,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <TableActionCell type="material" row={row} />
        )
    },
]
let IngredientCol = [
    {
        name: "Name",
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: "Code",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "UOM",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Created by",
        // width: '80px',
        selector: row => row.CreatedBy,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => row.CreatedOn,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <TableActionCell type="ingradient" row={row} />
        )
    },
]

let OrderCol = [
    {
        name: "Order id",
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: "Customer",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "Order date",
        selector: row => row.Column1,
        sortable: true,
    },
    {
        name: "Product",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Quantity",
        selector: row => row.Column3,
        sortable: true,
    },
    {
        name: "Status",
        width: '130px',
        selector: row => row.CreatedBy,
        sortable: true,
    },
    {
        name: "Created by",
        // width: '80px',
        selector: row => row.CreatedBy,
        sortable: true,
    },
    {
        name: "Created On",
        width: '130px',
        selector: row => row.CreatedOn,
        sortable: true,
    },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <TableActionCell type="order" row={row} />
        )
    },
]

export const selectModuleColumn = [
    { name: 'Customer Management', columns: customerCol },
    { name: 'User Management', columns: userCol },
    { name: 'Product Management', columns: ProductCol },
    { name: 'Material Management', columns: MaterialCol },
    { name: 'Ingredient Management', columns: IngredientCol },
    { name: 'Order Management', columns: OrderCol },
]