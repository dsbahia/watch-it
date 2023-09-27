// import { Route, Navigate } from "react-router-dom";
// import { useAuthValue } from "./AuthContext";

// function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuthValue();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser?.emailVerified ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         );
//       }}
//     ></Route>
//   );
// }
// export default PrivateRoute;
import { Navigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
