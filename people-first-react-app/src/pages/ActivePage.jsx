import RadialNavigation from "../components/navigation/RadialNavigation";
import SiteFooter from "../components/layout/SiteFooter";
import "../Styles/Activepage-style/ActivePage.css";

export default function ActivePage() {
  return (
    <div className="active-page">
        <RadialNavigation />
        <div className="active-logo-wrap" />
      <SiteFooter />
      </div>
  );
}