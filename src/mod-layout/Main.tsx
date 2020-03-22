import React from 'react';
import { LayoutProps } from './types';

const Main : React.FC<LayoutProps> = props => {

    return (
        <>
            <div className="layout_main">
                { props.children }
            </div>
        </>
    );
};

export default Main;