import "./footer.css";
import { getCurrentYear } from "../../../utils/time";

const initialYear = 2024;
const currentYear = getCurrentYear();
const appName = "Thought Tip";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {initialYear} - {currentYear} {appName}
      </p>
    </footer>
  );
}
