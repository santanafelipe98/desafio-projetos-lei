import React from 'react';

import './style.css';

export interface TextFieldProps {
    className?:string;
    value?: string;
    label?: string;
    placeholder?: string;
    onChange?(e:React.ChangeEvent<HTMLInputElement>): void;
}

const TextField:React.FC<TextFieldProps> = props => {
    return (
        <div className={`TextField ${props.className || ''}`}>
            {
                props.label
                    && <label>{props.label}</label>
            }

            <input type="text"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} />
        </div>
        
    )
};

export default TextField;