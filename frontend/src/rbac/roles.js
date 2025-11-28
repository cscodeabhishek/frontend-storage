export const ROLES = {
  admin: {
    label: "Admin",
    permissions: [
      "upload",
      "delete",
      "rename",
      "download",
      "manage_users"
    ]
  },

  editor: {
    label: "Editor",
    permissions: [
      "upload",
      "rename",
      "download"
    ]
  },

  viewer: {
    label: "Viewer",
    permissions: [
      "download"
    ]
  }
};
