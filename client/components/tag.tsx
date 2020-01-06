import * as React from 'react'
import Icon from "./icon";

interface TagProps {
    name: String,
    removeHandler?: Function
}

const Tag: React.FC<TagProps> = ({ name, removeHandler }) => (
    <div className="tag d-flex-center">
        <span className="tag__title">{ name }</span>
        <Icon 
            name="times" 
            className="tag__close"
            onClick={removeHandler}
        />
    </div>
)

export default Tag