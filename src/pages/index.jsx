// import Navbar from "../components/Navbar";

// const Home = () => (
//   <div>
//     <Navbar />
//     <h2>Welcome to the Travel Blog!</h2>
//   </div>
// );

// export default Home;
import Navbar from "../components/Navbar";

const backgroundStyle = {
  backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`, // travel-themed photo from Unsplash
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  color: "white",
  padding: "2rem",
  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const headingStyle = {
  marginTop: "3rem",
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "center",
};

const Home = () => (
  <div style={backgroundStyle}>
    <Navbar />
    <h2 style={headingStyle}>Welcome to the Travel Blog!</h2>
  </div>
);

export default Home;
