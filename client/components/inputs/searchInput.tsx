import Icon from '../icon'

const SearchInput: React.FC = () => (
    <form>
        <div className="input-wrapper">
            <input type="text" placeholder="Search" />
            <div className="input__icon">
                <div className="input__icon--search">
                    <Icon name="search" />
                </div>
            </div>
        </div>
    </form>
)

export default SearchInput