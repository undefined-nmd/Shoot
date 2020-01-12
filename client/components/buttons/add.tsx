import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



let Add = ({ size = '2x' }) => {

    return (
        <div className="button__add">
            <FontAwesomeIcon icon="plus" size={size} />
        </div>
    )

}

export default Add;