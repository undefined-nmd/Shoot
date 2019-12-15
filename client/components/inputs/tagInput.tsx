import Tag from "../tag";

const TagInput = () => {
    return (
        <div className="form-group">
            <ul>
                <li>
                    <Tag />
                </li>
            </ul>
            <input type="text" placeholder="Press enter to add a tag" />
        </div>
    )
}

export default TagInput