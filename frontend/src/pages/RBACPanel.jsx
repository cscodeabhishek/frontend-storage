import { ROLES } from "../rbac/roles";
import { useRBAC } from "../rbac/RBACContext";

export default function RBACPanel() {
  const { currentRole, setCurrentRole } = useRBAC();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">RBAC Role Selector</h1>

      <label className="text-lg font-medium">Current Role:</label>
      <select
        className="border p-2 rounded ml-2"
        value={currentRole}
        onChange={(e) => setCurrentRole(e.target.value)}
      >
        {Object.entries(ROLES).map(([role]) => (
          <option key={role} value={role}>
            {ROLES[role].label}
          </option>
        ))}
      </select>

      <h2 className="text-xl font-semibold mt-6">Permissions:</h2>
      <ul className="mt-2">
        {ROLES[currentRole].permissions.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>

      <div className="mt-8 p-4 border rounded bg-gray-50">
        <h3 className="text-lg font-semibold">Permission Test</h3>

        <div className="mt-4 space-x-3">
          <PermissionButton permission="upload">Upload File</PermissionButton>
          <PermissionButton permission="delete">Delete</PermissionButton>
          <PermissionButton permission="rename">Rename</PermissionButton>
          <PermissionButton permission="download">Download</PermissionButton>
          <PermissionButton permission="manage_users">Manage Users</PermissionButton>
        </div>
      </div>
    </div>
  );
}

function PermissionButton({ permission, children }) {
  const { hasPermission } = useRBAC();

  if (!hasPermission(permission)) return null;

  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded">
      {children}
    </button>
  );
}
