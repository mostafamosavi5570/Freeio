import "./AboutWoocomers.css";
import Woocomers from "../../img/Woocomers.png";
export default function AboutWoocomers() {
    return(
    <div className="aboutwoocomers">
        <div className="WoocomersImage">
            <img src={Woocomers} alt="" width={700} />
        </div>
        <div className="WoocomersText">
            <h1>سازگاری با ووکامرس</h1>
            <ul>
                <li>فروش هر چیزی از محصولات دیجیتال گرفته تا فیزیکی با افزونه ووکامرس.</li>
                <li>راه اندازی سیستم پرداخت با محبوب ترین روش های پرداخت</li>
                <li>بدون نیاز به کدنویسی</li>
                <li>داشتن گزارش کامل از فروش خود در هر زمان.</li>
            </ul>
        </div>
    </div>
    )
}
