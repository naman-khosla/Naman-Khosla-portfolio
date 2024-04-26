import Introduction1 from "../Components/Homepage_Components/Introduction_1.js";
import ProfessionalSnap from "../Components/Homepage_Components/ProfessionalSnap.js";

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
