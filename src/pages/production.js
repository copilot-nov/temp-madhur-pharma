import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Productionlayout from '../layout/production';
import { GET_PRODUCTION_BATCH_LIST } from '../redux/actions/production';
import { GET_MATERIAL_LIST, GET_MASTER_DATA_LIST, GET_PRODUCT_LIST, GET_ORDER_LIST } from '../redux/actions/admin';


const Production = (props) => {
    const {GET_PRODUCTION_BATCH_LIST , GET_MATERIAL_LIST, GET_MASTER_DATA_LIST, GET_PRODUCT_LIST, GET_ORDER_LIST } = props
   
    useEffect(() => {
        GET_PRODUCTION_BATCH_LIST()
        GET_MATERIAL_LIST()
        GET_MASTER_DATA_LIST()
        GET_PRODUCT_LIST()
        GET_ORDER_LIST()
    }, [GET_PRODUCTION_BATCH_LIST, 
        GET_MATERIAL_LIST,
        GET_MASTER_DATA_LIST, 
        GET_PRODUCT_LIST, GET_ORDER_LIST])

    return (
        <div>
            <Productionlayout />
        </div>
    );
};


export default connect(null, { GET_PRODUCTION_BATCH_LIST, GET_MATERIAL_LIST, GET_MASTER_DATA_LIST, GET_PRODUCT_LIST, GET_ORDER_LIST})(Production);
