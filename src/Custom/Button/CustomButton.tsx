
import React from 'react';

interface CustomButtonProps {
    className: string; 
    onClick?: () => void; 
    children?: React.ReactNode; 
}

const ButtonCustom: React.FC<CustomButtonProps> = ({ className, onClick, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children} 
        </button>
    );
};

export default ButtonCustom;