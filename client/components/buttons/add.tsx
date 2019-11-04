import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface AddProps {

}

export interface AddState {

}

class Add extends React.Component<AddProps, AddState> {

    render() {
        return (
            <div className="button__add">
                <FontAwesomeIcon icon="plus" />
            </div>);
    }
}

export default Add;