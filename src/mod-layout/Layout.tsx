import React from 'react';

import Header from './Header';
import Side from './Side';
import Main from './Main';

import './layout.css';

const Layout : React.FC<{}> = props => {
    return (
        <>
            <div className="layout">
                <Header className="layout_header"></Header>
                <Side className="layout_side"></Side>
                <Main>
                    { props.children }
                </Main>
            </div>
            
        </>
    );
};

export default Layout;