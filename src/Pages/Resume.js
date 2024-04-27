import Resume_Section_1 from "../Components/Resume_Components/Resume_Section_1.js";
import Resume_Section_2 from "../Components/Resume_Components/Resume_Section_2.js";
import Resume_Section_3 from "../Components/Resume_Components/Resume_Section_3.js";

export default function Resume() {
  return (
    <div className="Resume_page">
      <Resume_Section_1 />
      <Resume_Section_2 />
      <Resume_Section_3 />
    </div>
  );
}
