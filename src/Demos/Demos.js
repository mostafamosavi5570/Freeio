import "./Demos.css"
import Demo from "./DemoS/Demo"
export default function Demos() {
    return (
        <div className="Demos">
            <div className="Demos-text">
                <h1>دمو زیبا و متفاوت</h1>
                <p>قالب فیریو دارای 10 دموی بی نظیر و متفاوت است که همه آنها توسط صفحه ساز المنتور طراحی شده است</p>
            </div>
            <div className="product">
                <Demo />
                <Demo />
                <Demo />
                <Demo />
                <Demo />
                <Demo />
                <Demo />
                <Demo />
                <Demo />
                <Demo />
            </div>
        </div>
    )
}