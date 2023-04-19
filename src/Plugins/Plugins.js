import "./Plugins.css";
import threa from "../img/3.png"
import four from "../img/4.png"
import five from "../img/5.png"
import six from "../img/6.png"
import seven from "../img/7.png"
import eight from "../img/8.png"
export default function Plugins() {
    return (
        <div className="Plugins">
            <div className="Plugin-text">
                <h1>افزونه های پرمیوم و انحصاری</h1>
                <p>فقط مناسب‌ترین افزونه‌ها در فیریو ادغام شده‌اند تا به کاربران کمک کنند تا وب‌سایت‌های آموزشی قدرتمند و کاملاً کاربردی بسازند.</p>
            </div>
            <div className="Plugin-img">
                <div>
                    <img src={threa} alt="" />
                    <span>المنتور پرو</span>
                </div>
                <div>
                    <img src={four} alt="" />
                    <span>المنتور پرو</span>
                </div>
                <div>
                    <img src={five} alt="" />
                    <span>المنتور پرو</span>
                </div>
                <div>
                    <img src={six} alt="" />
                    <span>المنتور پرو</span>
                </div>
                <div>
                    <img src={seven} alt="" />
                    <span>المنتور پرو</span>
                </div>
                <div>
                    <img src={eight} alt="" />
                    <span>المنتور پرو</span>
                </div>
            </div>
        </div>
    )
}