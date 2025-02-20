import css from './SearchBox.module.css';

const SearchBox = ({filter, setFilter, filteredContacts}) => {
  return (
    <div className={css.searchContainer}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className="formInput"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Search contacts..."
      ></input>
      {filteredContacts.length === 0 && (
        <p className={css.searchMessage}>No contacts found 😔</p>
      )}
    </div>
  );
};

export default SearchBox;
