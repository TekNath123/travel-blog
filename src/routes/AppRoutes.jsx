// import { Navigate, Route, Routes } from "react-router-dom";
// import Profile from "../pages/profile";
// import home from "../pages";
// import About from "../pages/about";
// import { isLoggedIn } from "../utils/auth";
// import Countries from "../pages/countries";
// import Login from "../pages/auth/Login";
// import CountryDetails from "../pages/countries/[id]";

// const PrivateRoute = ({ children }) => {
//   return isLoggedIn() ? children : <Navigate to="/" />;
// };

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" Component={home} />
//       <Route path="/about" Component={About} />

//       <Route path="/countries" element={<Countries />} />
//       <Route
//         path="/countries/:id"
//         element={
//           <PrivateRoute>
//             <CountryDetails />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/profile"
//         element={
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         }
//       />
//       <Route path="/login" Component={Login}></Route>
//     </Routes>
//   );
// };
// export default AppRoutes;

import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "../pages/profile";
import home from "../pages";
import About from "../pages/about";
import { isLoggedIn } from "../utils/auth";
import Countries from "../pages/countries";
import Login from "../pages/auth/Login";
import CountryDetails from "../pages/countries/[id]";

const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

const wrapperStyle = {
  padding: "1rem 2rem",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#f9f9f9",
  minHeight: "100vh",
  color: "#333",
};

const AppRoutes = () => {
  return (
    <div style={wrapperStyle}>
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/about" Component={About} />

        <Route path="/countries" element={<Countries />} />
        <Route
          path="/countries/:id"
          element={
            <PrivateRoute>
              <CountryDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
