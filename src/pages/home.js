import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Homelayout from '../layout/home'
import { GET_USER_BY_ADMIN } from '../redux/actions/admin';

const Home = (props) => {
    // states 
    const { usermanagmentList } = props
    // action redux function
    const { GET_USER_BY_ADMIN } = props
    useEffect(() => {
        GET_USER_BY_ADMIN()
    }, [])
    return (
        <div>
            <Homelayout data={usermanagmentList} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        usermanagmentList: state?.AdminReducer?.usermanagmentList
    };
};
export default connect(mapStateToProps, { GET_USER_BY_ADMIN })(Home);
