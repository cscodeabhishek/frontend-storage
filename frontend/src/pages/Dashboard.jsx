import React, { useEffect, useState } from "react";
import { fetchFiles } from "../api";
import { useRBAC } from "../rbac/RBACContext";
import SearchBar from "../components/SearchBar";
import FileList from "../components/FileList";
import Charts from "../components/Charts";
import Pagination from "../components/Pagination";
import UploadButton from "../components/UploadButton";
import Protected from "../rbac/Protected";

export default function Dashboard() {
  const { token } = useRBAC();
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 25;

  async function load() {
    const res = await fetchFiles(token);
    setFiles(res.data || []);
  }

  useEffect(() => { load(); }, []);

  const filtered = files.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return (
    <div className="container">
      <div className="grid">
        <div>
          <div className="card" style={{ marginBottom: 20, display: "flex", justifyContent: "space-between" }}>
            <SearchBar value={search} onChange={setSearch} />
            <Protected permission="upload">
              <UploadButton />
            </Protected>
          </div>

          <FileList files={paginated} />

          <Pagination
            page={page}
            total={filtered.length}
            limit={limit}
            onChange={setPage}
          />
        </div>

        <div>
          <Charts files={files} />
        </div>
      </div>
    </div>
  );
}
