import Header from "@/components/Header";
import ParkingLocations from "@/components/ParkingLocations";
import Footer from "@/components/Footer";

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ParkingLocations />
      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage;