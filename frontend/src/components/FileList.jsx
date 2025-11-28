import { FixedSizeList as List } from "react-window";

export default function FileList({ files }) {
  if (!files.length) return <p>No files found.</p>;

  const Row = ({ index, style }) => (
    <div style={{ ...style, padding: "8px", borderBottom: "1px solid #ddd" }}>
      <strong>{files[index].name}</strong>
      <p style={{ margin: 0, fontSize: "12px" }}>
        Size: {(files[index].size / 1024).toFixed(2)} KB
      </p>
    </div>
  );

  return (
    <List
      height={500}
      width={"100%"}
      itemCount={files.length}
      itemSize={60}
      className="file-list"
    >
      {Row}
    </List>
  );
}
