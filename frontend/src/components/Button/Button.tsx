import React from 'react';

import './style.css';

export interface ButtonProps {
    variant?: 'primary' |  'secondary';
    disabled?: boolean;
    className?: string;
    onClick?(e:React.MouseEvent): void;
}

const Button:React.FC<ButtonProps> = ({
    variant,
    children,
    className,
    disabled,
    onClick
}) => {
    return (
        <button
            disabled={disabled}
            className={ `
                Button btn-${ variant || 'primary' } ${className || ''}`
            }
            onClick={onClick}>
            { children }
        </button>
    )
};

export default Button;