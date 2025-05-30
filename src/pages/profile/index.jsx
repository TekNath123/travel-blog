// import Navbar from "../../components/Navbar";

// const Profile = () => {
//   return (
//     <div>
//       <Navbar />
//       <div>Profile Page</div>
//     </div>
//   );
// };
// export default Profile;

// import Navbar from "../../components/Navbar";
// import { useAuth } from "../../context/AuthContext";

// const Profile = () => {
//   const { userName } = useAuth();

//   return (
//     <>
//       <Navbar />
//       <main style={containerStyle}>
//         <div style={overlayStyle} />
//         <div style={cardWrapperStyle}>
//           <div style={cardStyle}>
//             <div style={avatarWrapperStyle}>
//               <img
//                 src={`https://ui-avatars.com/api/?name=${userName}&background=4e73df&color=fff&size=128`}
//                 alt="Profile Avatar"
//                 style={avatarStyle}
//               />
//             </div>
//             <h1 style={headerStyle}>Welcome, {userName}!</h1>
//             <p style={subtitleStyle}>
//               Your personal space to manage your account details and settings.
//             </p>

//             <div style={infoBoxStyle}>
//               <h3 style={infoTitleStyle}>User Information</h3>
//               <InfoRow label="Username" value={userName} />
//             </div>

//             <button
//               style={editButtonStyle}
//               onClick={() => alert("Edit Profile coming soon!")}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// const InfoRow = ({ label, value }) => (
//   <div style={infoRowStyle}>
//     <span style={infoLabelStyle}>{label}:</span>
//     <span style={infoValueStyle}>{value}</span>
//   </div>
// );

// const containerStyle = {
//   padding: "4rem 1rem",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "relative",
//   minHeight: "calc(100vh - 70px)", // assuming Navbar height ~70px
//   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   backgroundImage:
//     'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80")',
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   overflow: "hidden",
// };

// const overlayStyle = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.35)",
//   zIndex: 0,
// };

// const cardWrapperStyle = {
//   position: "relative",
//   zIndex: 1,
//   maxWidth: "420px",
//   width: "100%",
// };

// const cardStyle = {
//   backgroundColor: "rgba(255, 255, 255, 0.95)",
//   borderRadius: "20px",
//   padding: "3rem 2rem",
//   boxShadow: "0 15px 30px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)",
//   textAlign: "center",
//   color: "#333",
// };

// const avatarWrapperStyle = {
//   background: "linear-gradient(135deg, #764ba2, #667eea)",
//   width: "140px",
//   height: "140px",
//   borderRadius: "50%",
//   padding: "5px",
//   margin: "0 auto 1.5rem auto",
//   boxShadow:
//     "0 8px 15px rgba(118, 75, 162, 0.5), 0 4px 6px rgba(102, 126, 234, 0.4)",
// };

// const avatarStyle = {
//   borderRadius: "50%",
//   width: "130px",
//   height: "130px",
//   display: "block",
// };

// const headerStyle = {
//   fontSize: "2rem",
//   marginBottom: "0.2rem",
//   fontWeight: "700",
//   color: "#4e3e8c",
//   letterSpacing: "0.05em",
// };

// const subtitleStyle = {
//   fontSize: "1rem",
//   marginBottom: "2rem",
//   color: "#666",
//   fontWeight: "500",
// };

// const infoBoxStyle = {
//   backgroundColor: "#f5f7ff",
//   borderRadius: "15px",
//   padding: "1.5rem 2rem",
//   marginBottom: "2rem",
//   boxShadow: "inset 0 0 10px #d4daf9",
//   textAlign: "left",
// };

// const infoTitleStyle = {
//   fontSize: "1.3rem",
//   fontWeight: "600",
//   marginBottom: "1rem",
//   color: "#4e3e8c",
//   borderBottom: "2px solid #667eea",
//   paddingBottom: "0.3rem",
// };

// const infoRowStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "0.5rem 0",
//   borderBottom: "1px solid #dbe1ff",
// };

// const infoLabelStyle = {
//   fontWeight: "600",
//   color: "#555",
// };

// const infoValueStyle = {
//   fontWeight: "500",
//   color: "#222",
// };

// const editButtonStyle = {
//   backgroundColor: "#667eea",
//   color: "#fff",
//   padding: "0.75rem 2rem",
//   border: "none",
//   borderRadius: "50px",
//   fontSize: "1rem",
//   fontWeight: "600",
//   cursor: "pointer",
//   boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)",
//   transition: "background-color 0.3s ease",
// };

// export default Profile;
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { userName } = useAuth();

  return (
    <>
      <Navbar />
      <main style={containerStyle}>
        <div style={overlayStyle} />
        <div style={cardWrapperStyle}>
          <div style={cardStyle}>
            <div style={avatarWrapperStyle}>
              <img
                src={`https://ui-avatars.com/api/?name=${userName}&background=4e73df&color=fff&size=128`}
                alt="Profile Avatar"
                style={avatarStyle}
              />
            </div>
            <h1 style={headerStyle}>Welcome, {userName}!</h1>
            <p style={subtitleStyle}>
              Your personal space to manage your account details and settings.
            </p>

            <div style={infoBoxStyle}>
              <h3 style={infoTitleStyle}>User Information</h3>
              <InfoRow label="Username" value={userName} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const InfoRow = ({ label, value }) => (
  <div style={infoRowStyle}>
    <span style={infoLabelStyle}>{label}:</span>
    <span style={infoValueStyle}>{value}</span>
  </div>
);

const containerStyle = {
  padding: "4rem 1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  minHeight: "calc(100vh - 70px)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundImage:
    'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  zIndex: 0,
};

const cardWrapperStyle = {
  position: "relative",
  zIndex: 1,
  maxWidth: "420px",
  width: "100%",
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  borderRadius: "20px",
  padding: "3rem 2rem",
  boxShadow: "0 15px 30px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)",
  textAlign: "center",
  color: "#333",
};

const avatarWrapperStyle = {
  background: "linear-gradient(135deg, #764ba2, #667eea)",
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  padding: "5px",
  margin: "0 auto 1.5rem auto",
  boxShadow:
    "0 8px 15px rgba(118, 75, 162, 0.5), 0 4px 6px rgba(102, 126, 234, 0.4)",
};

const avatarStyle = {
  borderRadius: "50%",
  width: "130px",
  height: "130px",
  display: "block",
};

const headerStyle = {
  fontSize: "2rem",
  marginBottom: "0.2rem",
  fontWeight: "700",
  color: "#4e3e8c",
  letterSpacing: "0.05em",
};

const subtitleStyle = {
  fontSize: "1rem",
  marginBottom: "2rem",
  color: "#666",
  fontWeight: "500",
};

const infoBoxStyle = {
  backgroundColor: "#f5f7ff",
  borderRadius: "15px",
  padding: "1.5rem 2rem",
  marginBottom: "2rem",
  boxShadow: "inset 0 0 10px #d4daf9",
  textAlign: "left",
};

const infoTitleStyle = {
  fontSize: "1.3rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#4e3e8c",
  borderBottom: "2px solid #667eea",
  paddingBottom: "0.3rem",
};

const infoRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5rem 0",
  borderBottom: "1px solid #dbe1ff",
};

const infoLabelStyle = {
  fontWeight: "600",
  color: "#555",
};

const infoValueStyle = {
  fontWeight: "500",
  color: "#222",
};

export default Profile;
