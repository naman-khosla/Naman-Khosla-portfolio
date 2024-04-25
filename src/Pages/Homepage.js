import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Introduction1 from "../Components/Introduction_1.js";
import ProfessionalSnap from "../Components/ProfessionalSnap.js";

export default function Homepage() {
  return (
    <div className="main">
      <nav>
        <Introduction1 />
        <ProfessionalSnap />
      </nav>
    </div>
  );
}
