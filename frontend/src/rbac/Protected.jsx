import { useRBAC } from "./RBACContext";

export default function Protected({ permission, children }) {
  const { hasPermission } = useRBAC();

  if (!hasPermission(permission)) return null;

  return children;
}
