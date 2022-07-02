import React from 'react';
import Wrapper from 'comps/SuperAdminLayout/comps/Wrapper'
import './css/index.css'
import Body from './comps/Body';
import Header from './comps/Header';

const SuperAdminLayout = (props) => {
    const { name, ...rest } = props
    
    return (
        <React.Fragment>
            <Wrapper>
                <Header name="App Name" />
                <Body />
            </Wrapper>
        </React.Fragment>
    )
}

export default SuperAdminLayout