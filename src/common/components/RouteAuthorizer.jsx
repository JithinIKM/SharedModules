import { routeRolePermissionCheck } from 'utils/user';
import { InfoPages } from 'common/components';
import { BASE_PATH, MODULE_PATH } from 'common/constants';

const RouteAuthorizer = ({ path = `/${BASE_PATH}/${MODULE_PATH}`, element, roles = [] }) => {
  return routeRolePermissionCheck({ path, roles }) ? element : <InfoPages.UnAuthorized />;
};

export default RouteAuthorizer;
