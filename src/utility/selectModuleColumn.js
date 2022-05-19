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
        width: '130px',
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
        selector: row => row.Name,
        sortable: true,
    },
    {
        name: "Empolyee id",
        selector: row => row.Description,
        sortable: true,
    },
    {
        name: "Designation",
        selector: row => row.Column1,
        sortable: true,
    },
    {
        name: "Department",
        selector: row => row.Column2,
        sortable: true,
    },
    {
        name: "Email",
        selector: row => row.Column3,
        sortable: true,
    },
    {
        name: "Phone",
        selector: row => row.Column3,
        sortable: true,
    },
    {
        name: "Created By",
        width: '130px',
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
        width: '130px',
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
        width: '130px',
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
        width: '130px',
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
        width: '130px',
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
    { name: 'Customer Management', column: customerCol },
    { name: 'User Management', column: userCol },
    { name: 'Product Management', column: ProductCol },
    { name: 'Material Management', column: MaterialCol },
    { name: 'Ingredient Management', column: IngredientCol },
    { name: 'Order Management', column: OrderCol },
]