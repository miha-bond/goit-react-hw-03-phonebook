const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p> Find contacts by name </p>
      <input
        style={{ fontFamily: 'Comfortaa' }}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
