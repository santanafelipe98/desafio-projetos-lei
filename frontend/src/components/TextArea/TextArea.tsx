import React from 'react';

import './style.css';

export interface TextAreaProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?(e:React.ChangeEvent<HTMLTextAreaElement>): void;
}

const TextArea:React.FC<TextAreaProps> = props => {
    return (
        <div className={`TextArea ${props.className || ''}`}>
            {
                props.label
                    && <label>{ props.label }</label>
            }
            <textarea
                className="TextArea"
                value={props.value}
                onChange={props.onChange}>
                    {props.value}
            </textarea>
        </div>
        
    )
};

export default TextArea;