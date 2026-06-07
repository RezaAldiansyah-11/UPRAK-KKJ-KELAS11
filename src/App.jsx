import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import SearchProvider from "./components/SearchContext";
import Footer from "./components/Footer";

function App() {
  return (
    <SearchProvider>
      <Navbar />
      <UserCard />
      <Footer />
    </SearchProvider>
  );
}

export default App;
