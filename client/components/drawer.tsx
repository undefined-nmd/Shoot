import { useState, useEffect, CSSProperties } from 'react'

interface DrawerProps {
    height?: string,
    visible: Boolean
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const [showSheet, setShowSheet] = useState<Boolean>(props.visible)

    const handleClick = () => {
        setShowSheet(!showSheet)
    }   

    const styles = {
        drawer: {
            height: props.height
        }
    }

    return (
        <div className={(showSheet ? 'drawer__backdrop' : '')}>
            <div className={'drawer ' + (showSheet ? null : 'slideOut' )} style={styles.drawer}>
                <div className="drawer__indicator" onClick={handleClick}></div>
                <div className="drawer__content">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default Drawer