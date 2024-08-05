import React, { useState, useEffect } from 'react';

export default function Button({ onMouseDown, onMouseUp }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseDown = (e) => {
        if (onMouseDown) onMouseDown(e);
        setIsClicked(true);
    };

    const handleMouseUp = (e) => {
        if (onMouseUp) onMouseUp(e);
        setIsClicked(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`block text-black py-3 px-4 rounded w-full mt-10 
                ${isClicked && isHovered ? 'bg-orange' : 'bg-orange'} 
                ${isHovered && !isClicked ? 'bg-light-orange' : 'bg-orange'}
                `}>
            Done
        </button>
    );
}
