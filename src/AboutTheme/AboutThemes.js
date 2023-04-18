import "./AboutThemes.css";
import AboutElementor from "./AboutElementor/AboutElementor";
import AboutAdminDashbord from "./AboutAdminDashbord/AboutAdminDashbord";
import AboutWoocomers from "./AboutWoocomers/AboutWoocomers";

export default function AboutThemes(){
    return(
        <div className="aboutthemes">
            <AboutElementor />
            <AboutAdminDashbord />
            <AboutWoocomers />
        </div>
    )
}