// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";
// // import Navbar from "../../components/Navbar";

// // const Login = () => {
// //   const { loggedIn, toggleAuth } = useAuth();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   //   const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname;
// //   const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

// //   const handleLogin = () => {
// //     toggleAuth();
// //     navigate(afterLoginGoTo, { replace: true });
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div style={{ padding: "2 rem" }}>
// //         <h2>Login Page</h2>
// //         {loggedIn ? (
// //           <p>Yor are already logged in</p>
// //         ) : (
// //           <button onClick={handleLogin}> Click to login </button>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default Login;
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import Navbar from "../../components/Navbar";

// const Login = () => {
//   const { loggedIn, toggleAuth } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

//   const handleLogin = () => {
//     toggleAuth();
//     navigate(afterLoginGoTo, { replace: true });
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "100vh",
//           color: "white",
//           padding: "3rem",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             padding: "2rem 3rem",
//             borderRadius: "10px",
//             textAlign: "center",
//             maxWidth: "400px",
//             width: "100%",
//           }}
//         >
//           <h2>Login Page</h2>
//           {loggedIn ? (
//             <p>You are already logged in</p>
//           ) : (
//             <button
//               onClick={handleLogin}
//               style={{
//                 padding: "0.6rem 1.2rem",
//                 fontSize: "1.1rem",
//                 borderRadius: "5px",
//                 border: "none",
//                 cursor: "pointer",
//                 backgroundColor: "#ff7f50", // coral
//                 color: "white",
//                 marginTop: "1.5rem",
//               }}
//             >
//               Click to login
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// // export default Login;
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// import { useState } from "react";
// import Navbar from "../../components/Navbar";

// const Login = () => {
//   const { loggedIn, toggleAuth } = useAuth();
//   const [inputUsername, setInputUsername] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/"; //question tell us if it is undefined or not

//   const handleLogin = () => {
//     if (!inputUsername) {
//       alert("Username required");
//       return;
//     }
//     toggleAuth(inputUsername);
//     setInputUsername("");
//     navigate(afterLoginGoTo, { replace: true });
//   };
//   return (
//     <>
//       <Navbar />
//       <div style={{ padding: "2rem" }}>
//         <h2>Login Page</h2>
//         {loggedIn ? (
//           <p>You are already logged in</p>
//         ) : (
//           <>
//             <input
//               type="text"
//               value={inputUsername}
//               onChange={(event) => setInputUsername(event.target.value)}
//               placeholder="Username"
//             />
//             <button onClick={handleLogin}>Click to Login </button>
//           </>
//         )}
//       </div>
//     </>
//   );
// };
// export default Login;

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import Navbar from "../../components/Navbar";

const Login = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const [inputUsername, setInputUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

  const handleLogin = () => {
    if (!inputUsername) {
      alert("Username required");
      return;
    }
    toggleAuth(inputUsername);
    setInputUsername("");
    navigate(afterLoginGoTo, { replace: true });
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h2 style={titleStyle}>Login Page</h2>
        {loggedIn ? (
          <p style={infoTextStyle}>You are already logged in.</p>
        ) : (
          <div style={formStyle}>
            <input
              type="text"
              value={inputUsername}
              onChange={(event) => setInputUsername(event.target.value)}
              placeholder="Enter your username"
              style={inputStyle}
            />
            <button onClick={handleLogin} style={buttonStyle}>
              Click to Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const containerStyle = {
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  marginBottom: "1.5rem",
  fontSize: "2rem",
  color: "#333",
};

const infoTextStyle = {
  fontSize: "1.1rem",
  color: "#555",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  maxWidth: "300px",
};

const inputStyle = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "0.5rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
};

export default Login;
