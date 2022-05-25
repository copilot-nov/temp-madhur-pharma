import moment from 'moment'
import TableActionCell from '../components/tailwind-table/tableActionCell'

let customerCol = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "City",
        selector: row => row.city,
        sortable: true,
    },
    {
        name: "Contact person",
        selector: row => row.contact_person,
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
            <TableActionCell type="customer" url={`/customer/master/${row?.id}`} row={row} />
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
            <TableActionCell type='user' url={`/users/${row?.id}`} row={row} />
        )
    },
]

let ProductCol = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "Customer",
        selector: row => row.customer_id,
        sortable: true,
    },
    {
        name: "Product code",
        selector: row => row.code,
        sortable: true,
    },
    {
        name: "HSN code",
        selector: row => row.hsn_code,
        sortable: true,
    },
    {
        name: "Created by",
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
            <TableActionCell type="product" url={`/product/master/${row?.id}`} row={row} />
        )
    },
]
let MaterialCol = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "Code",
        selector: row => row.code,
        sortable: true,
    },
    {
        name: "Capacity",
        selector: row => row.capacity,
        sortable: true,
    },
    {
        name: "UOM",
        selector: row => row.uom,
        sortable: true,
    },
    {
        name: "SKU",
        selector: row => row.sku,
        sortable: true,
    },
    {
        name: "Created by",
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
            <TableActionCell type="material" url={`/material/master/${row?.id}`} row={row} />
        )
    },
]

let IngredientCol = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "Code",
        selector: row => row.code,
        sortable: true,
    },
    {
        name: "UOM",
        selector: row => row.uom,
        sortable: true,
    },
    {
        name: "Created by",
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
            <TableActionCell type="ingredient" url={`/ingredient/master/${row?.id}`} row={row} />
        )
    },
]

let OrderCol = [
    {
        name: "Order id",
        selector: row => row.id,
        sortable: true,
    },
    {
        name: "Customer",
        selector: row => row.customer_id,
        sortable: true,
    },
    {
        name: "Order date",
        selector: row => moment(row.order_date).format('DD/MM/YYYY'),
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
        selector: row => row.status,
        sortable: true,
    },
    {
        name: "Created by",
        // width: '80px',
        selector: row => moment(row.created_by).format('DD/MM/YYYY'),
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
            <TableActionCell type="order" url={`/order/master/${row?.id}`} row={row} />
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
    { name: 'Manufacturing Template', columns: [] }
]