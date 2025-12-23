import Filters from "../components/Filters";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Discover the Best Properties</h2>
      <Filters />
      <PropertyList />
    </div>
  );
};

export default Home;
