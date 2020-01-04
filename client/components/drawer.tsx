import { useState, useEffect } from 'react'

interface DrawerProps {
    height?: string,
    visible: Boolean
    onToggleDrawer(): void
}

const Drawer: React.FC<DrawerProps> = (props) => {    
    const styles = {
        drawer: {
            height: props.height
        }
    }

    if(!props.visible) {
        return null
    }

    return (
        <div className={(props.visible ? 'drawer__backdrop' : '')}>
            <div className={'drawer ' + (props.visible ? '' : 'slideOut' )} style={styles.drawer}>
                <div className="drawer__indicator" onClick={props.onToggleDrawer}></div>
                <div className="drawer__content">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default Drawer