import React from 'react';

export interface ErrorProps {
    className?:string;
}

const Error:React.FC<ErrorProps> = props => {
    return (
        <div className={`Error ${props.className || ''}`}>
            { props.children }
        </div>
    );
};

export default Error;