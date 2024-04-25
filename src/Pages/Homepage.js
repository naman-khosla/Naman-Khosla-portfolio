import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Body from "../Components/Body.js";
import Introduction1 from "../Components/Introduction_1.js";
import ProfessionalSnap from "../Components/ProfessionalSnap.js";

export default function Homepage() {
  return (
    <div className="main">
      <nav>
        <Navbar />
        <Introduction1 />
        <ProfessionalSnap />
        <Footer />
      </nav>
    </div>
  );
}
