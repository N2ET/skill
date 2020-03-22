import React from 'react';
import { LayoutProps } from './types';

// 此处 LayoutProps写为一个{}也不会报错
const Header: React.FC<LayoutProps> = props => {

    return (
        <>
            <div className={ props.className }>
                <span>Header</span>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    );

};

export default Header;