export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search files..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        marginBottom: "10px",
      }}
    />
  );
}
