import "./AboutAdminDashbord.css";
import DashboardAdmin from "../../img/DashboardAdmin.png"
export default function AboutAdminDashbord() {
    return (
        <div className="aboutAdmindashbord">
            <div className="AdminDassbordImage">
                <img src={DashboardAdmin} alt="" width={700} />
            </div>
            <div className="elementorText">
                <h1>داشبورد فریلنسر و کارفرما</h1>
                
                <p>قالب فیریو با داشتن داشبورد حرفه ای برای کارفرما و فریلنسر ، به شما در طراحی و توسه وبسایت خود کمک میکند.</p>
                <ul>
                    <li> یک طراح UI/UX شوید.</li>
                    <li> شما می توانید شروع به کسب درآمد از مهارت های فیگما کنید.</li>
                    <li> یک پروژه UI از ابتدا تا انتها بسازید.</li>
                    <li> با رنگ ها و فونت های متفاوت کار کنید</li>
                </ul>
            </div>
        </div>
    )
}