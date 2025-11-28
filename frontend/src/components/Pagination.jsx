export default function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Prev
      </button>

      <span>
        Page {page} / {totalPages || 1}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
