// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";

// const countries = [
//   { id: "nepal", name: "Nepal", description: "Land of the Himalayas" },
//   { id: "japan", name: "Japan", description: "Land of the Rising Sun" },
//   { id: "italy", name: "Italy", description: "Land of Pizza and Pasta" },
// ];

// const Countries = () => (
//   <div>
//     <Navbar />

//     <h2>Countries</h2>
//     <div>
//       {countries.map((country) => (
//         <div key={country.id}>
//           <Link to={`/countries/${country.id}`}>{country.name}</Link>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Countries;

// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";

// const countries = [
//   { id: "nepal", name: "Nepal", description: "Land of the Himalayas" },
//   { id: "japan", name: "Japan", description: "Land of the Rising Sun" },
//   { id: "italy", name: "Italy", description: "Land of Pizza and Pasta" },
// ];

// const Countries = () => (
//   <div
//     style={{
//       minHeight: "100vh",
//       backgroundImage:
//         "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       padding: "2rem",
//       color: "white",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       textShadow: "1.5px 1.5px 4px rgba(0, 0, 0, 0.8)",
//     }}
//   >
//     <Navbar />
//     <h2
//       style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}
//     >
//       Explore Countries
//     </h2>
//     <div
//       style={{
//         maxWidth: "600px",
//         margin: "0 auto",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         borderRadius: "12px",
//         padding: "1.5rem",
//         boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
//       }}
//     >
//       {countries.map((country) => (
//         <div
//           key={country.id}
//           style={{
//             padding: "1rem",
//             marginBottom: "1rem",
//             borderRadius: "8px",
//             backgroundColor: "rgba(255, 255, 255, 0.15)",
//             transition: "background-color 0.3s ease",
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.backgroundColor =
//               "rgba(255, 255, 255, 0.35)")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.backgroundColor =
//               "rgba(255, 255, 255, 0.15)")
//           }
//         >
//           <Link
//             to={`/countries/${country.id}`}
//             style={{
//               color: "white",
//               fontSize: "1.4rem",
//               fontWeight: "600",
//               textDecoration: "none",
//             }}
//           >
//             {country.name}
//           </Link>
//           <p
//             style={{ marginTop: "0.3rem", fontStyle: "italic", color: "#ddd" }}
//           >
//             {country.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Countries;
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const countries = [
  { id: "nepal", name: "Nepal", description: "Land of the Himalayas" },
  { id: "japan", name: "Japan", description: "Land of the Rising Sun" },
  { id: "italy", name: "Italy", description: "Land of Pizza and Pasta" },
];

// Flag URLs same as before
const flagUrls = {
  Nepal: "https://flagcdn.com/w40/np.png",
  Japan: "https://flagcdn.com/w40/jp.png",
  Italy: "https://flagcdn.com/w40/it.png",
};

const Countries = () => (
  <div
    style={{
      minHeight: "100vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "2rem",
      color: "white",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textShadow: "1.5px 1.5px 4px rgba(0, 0, 0, 0.8)",
    }}
  >
    <Navbar />
    <h2
      style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}
    >
      Explore Countries
    </h2>
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
      }}
    >
      {countries.map((country) => (
        <div
          key={country.id}
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              "rgba(255, 255, 255, 0.35)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              "rgba(255, 255, 255, 0.15)")
          }
        >
          <Link
            to={`/countries/${country.id}`}
            style={{
              color: "white",
              fontSize: "1.4rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={flagUrls[country.name]}
              alt={`${country.name} flag`}
              style={{
                width: "30px",
                height: "20px",
                objectFit: "cover",
                borderRadius: "3px",
                marginRight: "0.75rem",
                boxShadow: "0 0 5px rgba(0,0,0,0.3)",
              }}
            />
            {country.name}
          </Link>
          <p
            style={{ marginTop: "0.3rem", fontStyle: "italic", color: "#ddd" }}
          >
            {country.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Countries;
