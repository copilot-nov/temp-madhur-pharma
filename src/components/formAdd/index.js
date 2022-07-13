// import CustomerManagment from './customer-managment';
// import OrderManagment from "./order-managment";
// import IngredientManagment from './ingredient-managment'
import ManufactureTemplateTabs from '../../components/ManufactureTemplate/AddFormulation'
// import MaterialManagment from "./material-managment";
import { Alert } from '../alert'
import AddUserManagement from '../UserManagement/AddUserManagement';
import AddProductManagement from '../ProductManagement/AddProductManagement';
import AddOrderManagement from '../OrderManagement/AddOrderManagement';
import AddMaterialManagement from '../MaterialManagement/AddMaterialManagement';
import AddCustomerManagement from '../CustomerManagement/AddCustomerManagement';
import AddIngredientManagement from '../IngredientManagement/AddIngredientManagement';

const MainFormAdd = (props) => {
    const { closeModal, titleModal, handleResponse, setHandleResponse, isOpen, setIsOpen, formulationId, manufacturingTemplateEditResponse, Id } = props
    // console.log(formulationId)

    return (
        <div>
            {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
            {titleModal === 'User Management' && <AddUserManagement setHandleResponse={setHandleResponse} closeModal={closeModal} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen}/>}
            {titleModal === 'Customer Management' && <AddCustomerManagement closeModal={closeModal} setHandleResponse={setHandleResponse} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen}/>}
            {titleModal === 'Product Management' && <AddProductManagement closeModal={closeModal} setHandleResponse={setHandleResponse} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen}/>}
            {titleModal === 'Order Management' && <AddOrderManagement closeModal={closeModal} setHandleResponse={setHandleResponse} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen}/>}
            {titleModal === 'Manufacturing Template' && <ManufactureTemplateTabs closeModal={closeModal} setHandleResponse={setHandleResponse} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen} manufacturingTemplateEditResponse={manufacturingTemplateEditResponse} Id={Id}/>}
            {titleModal === 'Material Management' && <AddMaterialManagement closeModal={closeModal} setHandleResponse={setHandleResponse} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen}/>}
            {titleModal === 'Ingredient Management' && <AddIngredientManagement setHandleResponse={setHandleResponse} closeModal={closeModal} isOpen={isOpen} titleModal={titleModal} setIsOpen={setIsOpen}/>}
        </div>
    )
}

export default MainFormAdd;