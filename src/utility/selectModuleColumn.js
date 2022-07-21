import moment from 'moment'
import TableActionCell from '../components/tailwind-table/tableActionCell'
import EditDeleteActionForUser from '../components/UserManagement/EditDeleteAction'
import EditDeleteActionForProduct from '../components/ProductManagement/EditDeleteActionProduct'
import EditDeleteActionOrder from '../components/OrderManagement/EditDeleteActionOrder'
import EditDeleteActionMaterial from '../components/MaterialManagement/EditDeleteActionMaterial'
import EditDeleteActionIngredient from '../components/IngredientManagement/EditDeleteActionIngredient'
import EditDaleteActionCustomer from '../components/CustomerManagement/EditDaleteActionCustomer'
import EditDeleteManufacturing from '../components/ManufactureTemplate/EditDeleteFolder/EditDeleteManufacturing'

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
        selector: row => row?.customer_m_createdBy?.created_by,
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
            <EditDaleteActionCustomer type="customer" url={`/customer/master/${row?.id}`} row={row} Id={row?.id} />
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
        selector: row => row.user_master_createdBy?.created_by,
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
            <EditDeleteActionForUser type='user' Id={row?.id} url={`/users/${row?.id}`} row={row} />
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
        selector: row => row.product_master_customer_id[0]?.name,
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
        selector: row => row.product_master_createdBy?.created_by,
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
            <EditDeleteActionForProduct type="product" url={`/product/master/${row?.id}`} row={row} Id={row?.id} />
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
        selector: row => row.material_master_uom[0]?.label,
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
        selector: row => row.material_master_createdBy?.created_by,
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
            <EditDeleteActionMaterial type="material" url={`/material/master/${row?.id}`} row={row} Id={row?.id} />
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
        selector: row => row?.ingredient_m_createdBy?.created_by,
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
            <EditDeleteActionIngredient type="ingredient" url={`/ingredient/master/${row?.id}`} row={row} Id={row?.id} />
        )
    },
]

let ManufactureTemplate = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "Description",
        selector: row => row.description,
        sortable: true,
    },
    {
        name: "License No.",
        selector: row => row.license_no,
        sortable: true,
    },
    {
        name: "Created By",
        // width: '80px',
        selector: row => row.product_formulation_createdBy?.created_by,
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
            <EditDeleteManufacturing type="manufacturing" url={`/manufacturing-template/product/formulation/${row?.id}`} row={row} Id={row?.id} />
        )
    },
]

let OrderCol = [
    {
        name: "PO ID",
        selector: row => row.po_id,
        sortable: true,
    },
    {
        name: "Customer",
        selector: row => row.order_customer[0]?.name,
        sortable: true,
    },
    {
        name: "Order date",
        selector: row => moment(row.order_date).format('DD/MM/YYYY'),
        sortable: true,
    },

    {
        name: "Status",
        selector: row => row.order_status[0]?.label,
        sortable: true,
    },
    {
        name: "Created by",
        width: '130px',
        selector: row => row.created_by,
        sortable: true,
    },
    // {
    //     name: "Created On",
    //     width: '130px',
    //     selector: row => moment(row.created_on).format('DD/MM/YYYY'),
    //     sortable: true,
    // },
    {
        name: "Action",
        width: '130px',
        cell: (row) => (
            <EditDeleteActionOrder type="order" url={`/order/master/${row?.id}`} row={row} Id={row?.id} />
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
    { name: 'Manufacturing Template', columns: ManufactureTemplate }
]