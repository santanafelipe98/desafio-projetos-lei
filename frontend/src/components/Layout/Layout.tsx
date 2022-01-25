import React from 'react';
import './style.css';

export interface LayoutProps {
    title: string;
}

const Layout:React.FC<LayoutProps> = props => {
    return (
        <div className="Layout">
            <div className="header">
                <h1>{ props.title }</h1>
            </div>
            <div className="content">
                { props.children }
            </div>
        </div>
    );
};

export default Layout;