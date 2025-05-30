// // const Team = () => (
// //   <div>
// //     <p>Our passionate travel team !</p>
// //   </div>
// // );

// // export default Team;
// const teamMembers = [
//   {
//     name: "Alice Johnson",
//     role: "Travel Blogger",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Michael Smith",
//     role: "Photographer",
//     img: "https://randomuser.me/api/portraits/men/46.jpg",
//   },
//   {
//     name: "Sara Lee",
//     role: "Content Creator",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "David Brown",
//     role: "Tour Guide",
//     img: "https://randomuser.me/api/portraits/men/52.jpg",
//   },
// ];

// const Team = () => (
//   <div
//     style={{
//       padding: "2rem",
//       maxWidth: "900px",
//       margin: "0 auto",
//       textAlign: "center",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       color: "#333",
//     }}
//   >
//     <p style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
//       Our passionate travel team!
//     </p>
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
//         gap: "2rem",
//       }}
//     >
//       {teamMembers.map((member) => (
//         <div
//           key={member.name}
//           style={{
//             boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             borderRadius: "12px",
//             padding: "1rem",
//             backgroundColor: "#fff",
//           }}
//         >
//           <img
//             src={member.img}
//             alt={member.name}
//             style={{
//               width: "100%",
//               borderRadius: "50%",
//               marginBottom: "1rem",
//               objectFit: "cover",
//               aspectRatio: "1/1",
//             }}
//           />
//           <h3 style={{ margin: "0.3rem 0", fontSize: "1.2rem" }}>
//             {member.name}
//           </h3>
//           <p style={{ margin: 0, color: "#666", fontStyle: "italic" }}>
//             {member.role}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Team;

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Travel Blogger",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Photographer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sara Lee",
    role: "Content Creator",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Brown",
    role: "Tour Guide",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Team = () => (
  <div
    style={{
      padding: "4rem 2rem",
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "20px",
      color: "#f0f0f5",
      boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)",
    }}
  >
    <h2
      style={{
        fontSize: "2.8rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
        letterSpacing: "0.07em",
        textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      Our Passionate Travel Team
    </h2>
    <p
      style={{
        fontSize: "1.25rem",
        fontWeight: "500",
        marginBottom: "3rem",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#d0d0df",
        fontStyle: "italic",
        lineHeight: "1.6",
        textShadow: "1px 1px 6px rgba(0,0,0,0.2)",
      }}
    >
      Meet the dedicated explorers, storytellers, and guides who bring the world
      closer to you. Their passion for travel inspires every journey and every
      story we share.
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "2.5rem",
      }}
    >
      {teamMembers.map((member) => (
        <div
          key={member.name}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            padding: "1.5rem",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.1)",
            backdropFilter: "blur(10px)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 20px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: "100%",
              borderRadius: "50%",
              marginBottom: "1rem",
              objectFit: "cover",
              aspectRatio: "1 / 1",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              border: "3px solid rgba(255,255,255,0.5)",
            }}
          />
          <h3
            style={{
              margin: "0.3rem 0",
              fontSize: "1.3rem",
              fontWeight: "700",
              color: "#fff",
              textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              margin: 0,
              color: "#d0d0df",
              fontStyle: "italic",
              fontWeight: "600",
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            {member.role}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
