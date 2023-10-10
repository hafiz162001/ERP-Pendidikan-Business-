import { Navigate, Outlet } from "react-router-dom";
import { basePath } from "../api/basePath";
import { useUser } from "./useUser";
function PrivateRoute() {
  const user = useUser();
  return user ? <Outlet /> : <Navigate to={basePath.login} replace />;
}

export default PrivateRoute;
