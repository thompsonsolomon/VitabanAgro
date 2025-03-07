import React from "react";
import { Navigate } from "react-router-dom";

// export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
//   // if (window.location.pathname.includes("Dashboard")) {
//   //   alert("Trying to reach the dashboard?");
//   // }

//   console.log(user);

//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (!user) {
//           return children;
//         }
//         if (user) {
//           return (
//             <Redirect
//               to={{
//                 pathname: loggedInPath,
//                 // state: { from: location },
//               }}
//             />
//           );
//         }
//         return null;
//       }}
//     />
//   );
// }

// export function ProtectedRoute({ user, children, location, ...rest }) {
//   console.log(user);
//   return (

//     <Route path="/" element={<Home />} />

//     // <Route
//     //   {...rest}
//     //   render={({ location }) => {
//     //     if (user) {
//     //       return children;
//     //     }
//     //     if (!user) {
//     //       return (
//     //         <Redirect
//     //           to={{
//     //             pathname: "/Auth/signin",
//     //             state: { from: location },
//     //           }}
//     //         />
//     //       );
//     //     }
//     //     return null;
//     //   }}
//     // />
//   );
// }

export const ProtectedRoute = ({ user, pathname, children }) => {
  if (user) {
    return children;
  } else {
    <Navigate to="/signin" />;
  }
};
