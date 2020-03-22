import React from 'react';
import { LayoutProps } from './types';

const Side : React.FC<LayoutProps> = props => {

    return (
        <div className={ props.className }>
            <div>Side</div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Side;