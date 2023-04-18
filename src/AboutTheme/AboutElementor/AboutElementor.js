import "./AboutElementor.css";
import Elementor from "../../img/Elementor.png";

export default function AboutElementor(){
    return(
        <div className="aboutelementor">
            <div className="elementorImage">
                <img src={Elementor} alt="" width={700} />
            </div>
            <div className="elementorText">
                <h1>صفحه ساز المنتور پرو</h1>
                <p>صفحه ساز المنتور از بهترین صفحه سازهای وردپرس میباشد ، ما اِلمان های اختصاصی برای این صفحه ساز تعبیه کردیم تا شما بتوانیدبدون نیاز به دانش کدنویسی ، تنها با دراپ و دراگ کردن این اِلمان ها ، صفحاتی بی نظیر ایجاد کنید .</p>
                <ul>
                    <li>قابلیت درگ و دراپ کردن المان ها</li>
                    <li>سربرگ و پاورقی ساز</li>
                    <li>بدون نیاز به کدنویسی</li>
                    <li>اِلمان سفارشی قالب</li>
                </ul>
            </div>
        </div>
    )
}