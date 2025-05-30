// // import { useParams } from "react-router-dom";
// // import Navbar from "../../components/Navbar";

// // const CountryDetails = () => {
// //   const { id } = useParams();
// //   return (
// //     <div>
// //       <Navbar />
// //       <div>Country details for {id}</div>
// //     </div>
// //   );
// // };
// // export default CountryDetails;
// import { useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";

// const CountryDetails = () => {
//   const { id } = useParams();

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1350&q=80')", // another travel-themed photo
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         color: "white",
//         padding: "2rem",
//         textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <Navbar />
//       <div
//         style={{
//           marginTop: "2rem",
//           backgroundColor: "rgba(0, 0, 0, 0.6)",
//           padding: "2rem 3rem",
//           borderRadius: "12px",
//           maxWidth: "600px",
//           width: "100%",
//           textAlign: "center",
//           fontSize: "1.5rem",
//           fontWeight: "600",
//           boxShadow: "0 0 10px rgba(0,0,0,0.7)",
//         }}
//       >
//         Country details for <span style={{ color: "#ffd700" }}>{id}</span>
//       </div>
//     </div>
//   );
// };

// export default CountryDetails;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const countryData = {
  nepal: {
    name: "Nepal",
    description: "Land of the Himalayas, home to Mount Everest.",
    image:
      "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1595073504/blog/dmida4bcnbnrejsq7lyw.jpg",
  },
  japan: {
    name: "Japan",
    description:
      "Land of the Rising Sun, famous for cherry blossoms and Mt. Fuji.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9riB-DEHice6zXPnITlHkWCJK6GeLB3HeXA&amp;s",
  },
  italy: {
    name: "Italy",
    description: "Land of Pizza and Pasta, rich in history and culture.",
    image:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=1350&q=80",
  },
};

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCountry(countryData[id]);
    }, 500);
  }, [id]);

  if (!country) {
    return (
      <div style={{ padding: "2rem", color: "red", textAlign: "center" }}>
        <Navbar />
        <h2>Country Detail Loading</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${country.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        padding: "2rem",
        textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          marginTop: "3rem",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          padding: "2rem 3rem",
          borderRadius: "12px",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 15px rgba(0,0,0,0.7)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          {country.name}
        </h1>
        <p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
          {country.description}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
