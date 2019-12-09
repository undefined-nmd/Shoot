import { useState, useEffect } from 'react';

const Drawer = (props) => {
    const [showSheet, setShowSheet] = useState<Boolean>(false)

    const handleClick = () => {
        setShowSheet(!showSheet)
    }   

    return (
        <div className={(showSheet ? '' : 'drawer__backdrop')}>
            <div className={'drawer ' + (showSheet ? 'slideOut' : '')}>
                <div className="drawer__indicator" onClick={handleClick}></div>
                <div className="drawer__content">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default Drawer