import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Homelayout from '../layout/home'
import {
    GET_USER_BY_ADMIN, GET_CUSTOMER_LIST,
    GET_INGREDIENT_LIST, GET_MATERIAL_LIST,
    GET_PRODUCT_LIST, GET_ORDER_LIST
} from '../redux/actions/admin';

const Home = (props) => {
    const { GET_USER_BY_ADMIN, GET_CUSTOMER_LIST,
        GET_INGREDIENT_LIST, GET_MATERIAL_LIST,
        GET_PRODUCT_LIST, GET_ORDER_LIST } = props

    useEffect(() => {
        GET_USER_BY_ADMIN()
        GET_CUSTOMER_LIST()
        GET_INGREDIENT_LIST()
        GET_MATERIAL_LIST()
        GET_PRODUCT_LIST()
        GET_ORDER_LIST()
    }, [GET_USER_BY_ADMIN, GET_ORDER_LIST,
        GET_CUSTOMER_LIST, GET_INGREDIENT_LIST,
        GET_MATERIAL_LIST, GET_PRODUCT_LIST])

    return (
        <div>
            <Homelayout />
        </div>
    );
};


export default connect(null, {
    GET_USER_BY_ADMIN, GET_CUSTOMER_LIST,
    GET_INGREDIENT_LIST, GET_MATERIAL_LIST,
    GET_PRODUCT_LIST, GET_ORDER_LIST
})(Home);
