function SearchFilter({ search, newSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => newSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchFilter;