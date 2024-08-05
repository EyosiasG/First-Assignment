import React, { useState, useEffect} from 'react'
import Button from './button';


export default function Items() {
    const labels = ["Page 1", "Page 2", "Page 3", "Page 4"];

    const [hoveredOnAll, setHoveredOnAll] = useState(false);
    const [clickedAll, setClickedAll] = useState(false);
    const [checkedAll, setCheckedAll] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedItems, setClickedItems] = useState(Array(labels.length).fill(false));
    const [checkedIndex, setCheckedIndex] = useState(null);

    const [isButtonClicked, setButtonClicked] = useState(false);

    const handleMouseEnterOnAll = () => setHoveredOnAll(true);
    const handleMouseLeaveOnAll = () => setHoveredOnAll(false);
    const handleClickOnAll = () => {
        setCheckedAll(true);
        
        setClickedAll(!clickedAll);
        
        setClickedItems((clickedAll === false ? Array(labels.length).fill(true) : Array(labels.length).fill(false)));
        
        setTimeout(() => {
            setCheckedAll(false);
        }, 200);

    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    }
    const handleMouseLeave = () => setHoveredIndex(null);
    const handleClick = (index) => {
        setCheckedIndex(index);

        const newClickedItems = [...clickedItems];
        newClickedItems[index] = !newClickedItems[index];
        setClickedItems(newClickedItems);
        
        setTimeout(() => {
            setCheckedIndex(null);
        }, 200);
    };

    useEffect(() => {
        const areAllItemsTrue = clickedItems.every(item => item === true);
        setClickedAll(areAllItemsTrue);
        console.log("Are all items true:", areAllItemsTrue);
    }, [clickedItems]);

    const handleButtonClick = () => setButtonClicked(true);
    const handleButtonReleased = () => setButtonClicked(false);

    return (
        <div className="flex flex-col space-y-4  cursor-pointer">
            <div
                className="flex items-center justify-between space-x-60 cursor-pointer"
                onMouseEnter={handleMouseEnterOnAll}
                onMouseLeave={handleMouseLeaveOnAll}
                onClick={handleClickOnAll}
            >
                <label className="cursor-pointer">All Pages</label>
                <div className={`${checkedAll ? 'border-4 border-light-blue rounded-xl opacity-40' : 'border-4 border-white rounded-xl'} `}>
                    <label
                        className={`w-6 h-6 border border-grey rounded-md shadow flex items-center justify-center cursor-pointer 
                                ${hoveredOnAll && !clickedAll ? ' bg-white' : ''} 
                                ${clickedAll ? 'bg-blue border-none' : ''}
                                ${hoveredOnAll && clickedAll ? 'bg-light-blue border-none' : ''}
                            `}
                    >
                        {(hoveredOnAll || clickedAll) && (
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-7 h-7 
                                ${hoveredOnAll && !clickedAll ? 'text-grey' : ''} 
                                ${clickedAll ? 'text-white' : ''}
                                ${checkedAll ? 'text-dark-grey' : ''}
                                `} 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 5L19 8" />
                            </svg>
                        )}
                    </label>
                </div>
            </div>
            <hr />
            {labels.map((label, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between space-x-60 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}>
                    <label className="cursor-pointer">{label}</label>
                    <div className={`${checkedIndex === index ? 'border-4 border-light-blue rounded-xl opacity-40' : 'border-4 border-white rounded-xl'} `}>
                        <label
                            className={`w-6 h-6 border border-grey rounded-md shadow flex items-center justify-center  cursor-pointer 
                                ${hoveredIndex === index && !clickedItems[index] ? ' bg-white' : ''} 
                                ${clickedItems[index] ? 'bg-blue border-none' : ''}
                                ${hoveredIndex === index && clickedItems[index] ? 'bg-light-blue border-none' : ''}
                              
                                `}>
                            {(hoveredIndex === index || clickedItems[index]) && (
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 
                                    ${hoveredIndex === index && !clickedItems[index] ? 'text-grey' : ''} 
                                    ${clickedItems[index] ? 'text-white' : ''}
                                    ${checkedIndex === index ? 'text-dark-grey' : ''}
                                    `}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 5L19 8" />
                                </svg>
                            )}
                        </label>
                    </div>
                </div>
            ))}
            <hr  style={{ height: isButtonClicked ? '2.0px' : '0.5px' }} />
            <Button
                onMouseDown={handleButtonClick}
                onMouseUp={handleButtonReleased}
            />
        </div>
    )
}
