import UserManagment from './user-managment';
import CustomerManagment from './customer-managment';
import ProductManagment from "./product-managment";
import OrderManagment from "./order-managment";
import IngredientManagment from './ingredient-managment'
import ManufactureTemplateTabs from '../ManufactureTemplate'
import MaterialManagment from "./material-managment";
import { Alert } from '../alert'

const MainFormAdd = (props) => {
    const { closeModal, titleModal, handleResponse, setHandleResponse } = props

    return (
        <div>
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            {titleModal === 'User Management' && <UserManagment setHandleResponse={setHandleResponse} closeModal={closeModal} />}
            {titleModal === 'Customer Management' && <CustomerManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />}
            {titleModal === 'Product Management' && <ProductManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />}
            {titleModal === 'Order Management' && <OrderManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />}
            {titleModal === 'Manufacturing Template' && <ManufactureTemplateTabs closeModal={closeModal} setHandleResponse={setHandleResponse} />}
            {titleModal === 'Material Management' && <MaterialManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />}
            {titleModal === 'Ingredient Management' && <IngredientManagment setHandleResponse={setHandleResponse} closeModal={closeModal} />}
        </div>
    )
}

export default MainFormAdd;