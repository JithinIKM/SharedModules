export const hasRole = (role) => {
  return role === 'CITIZEN';
};

export const routeRolePermissionCheck = ({ path = '', roles = [] }) => {
  // TODO: need to implement logic to check roles
  return (path && roles);
};
