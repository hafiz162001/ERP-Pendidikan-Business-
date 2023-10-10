import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Searchbox = ({ searchQuery, setSearchQuery, label, }) => {
    const onSubmit = (e) => {
        // console.log(e.target.value);
        setSearchQuery(e.target.value)
    };

    return (
        <div className="course__sidebar-search mb-30">
        <form
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    {label}
                </span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder={label}
                name="search"
                onChange={onSubmit}
            />
            <button type="submit"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></button>
        </form>
        </div>
    );
};

export default Searchbox;