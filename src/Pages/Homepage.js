import Introduction1 from "../Components/Homepage_Components/Introduction_1.js";
import ProfessionalSnap from "../Components/Homepage_Components/ProfessionalSnap.js";
import Contact_Me from "../Components/Homepage_Components/Contact_Me.js";
import useScrollToTop from "../Components/Main_Components/ScrollToTop.js";

export default function Homepage() {
  return (
    <div className="main">
      <nav>
        <useScrollToTop />
        <Introduction1 />
        <ProfessionalSnap />
        <Contact_Me />
      </nav>
    </div>
  );
}
