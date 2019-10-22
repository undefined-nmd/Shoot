import Icon from '../icon'

const SearchInput: React.FC = () => (
    <div className="input-wrapper">
        <input type="text" placeholder="Search" />
        <div className="input__icon">
            <div className="input__icon--search">
                <Icon name="search" />
            </div>
        </div>
    </div>
)

export default SearchInput