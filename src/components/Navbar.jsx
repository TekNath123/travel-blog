// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// const Navbar = () => {
//   const navigate = useNavigate();
//   const { loggedIn, userName, toggleAuth } = useAuth();

//   const handleAuth = () => {
//     if (!loggedIn) {
//       navigate("/login");
//     } else {
//       toggleAuth();
//       navigate("/");
//     }
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "1rem 2rem",
//         backgroundColor: "white",
//       }}
//     >
//       <Link
//         style={{
//           fontWeight: "bold",
//           fontSize: "1.2rem",
//           textDecoration: "none",
//         }}
//         to={"/"}
//       >
//         Home
//       </Link>
//       <nav>
//         <Link to="/countries">Countries</Link>
//         <Link to="/about">About</Link>
//         {loggedIn && <Link to="/profile">Profile</Link>}

//         {!loggedIn ? (
//           <>
//             <button onClick={handleAuth}>Login</button>
//           </>
//         ) : (
//           <>
//             Hi, {userName}
//             <button onClick={handleAuth}>Logout</button>
//           </>
//         )}

//         {/* <button onClick={handleAuth}>{loggedIn ? "Logout" : "Login"}</button> */}
//       </nav>
//     </div>
//   );
// };
// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn, userName, toggleAuth } = useAuth();

  const handleAuth = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      toggleAuth();
      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e0e0e0",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            textDecoration: "none",
            color: "#333",
          }}
        >
          🌍 Teks Blog
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            to="/countries"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontWeight: "500",
              padding: "0.3rem 0.6rem",
              transition: "color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007bff")}
          >
            Countries
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontWeight: "500",
              padding: "0.3rem 0.6rem",
              transition: "color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007bff")}
          >
            About
          </Link>
          {loggedIn && (
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "500",
                padding: "0.3rem 0.6rem",
                transition: "color 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#007bff")}
            >
              Profile
            </Link>
          )}

          {!loggedIn ? (
            <button
              onClick={handleAuth}
              style={{
                padding: "0.4rem 0.8rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "background-color 0.2s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              Login
            </button>
          ) : (
            <>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#555",
                  marginRight: "0.5rem",
                }}
              >
                Hi, {userName}
              </span>
              <button
                onClick={handleAuth}
                style={{
                  padding: "0.4rem 0.8rem",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "background-color 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
