import "./Tools.css";
import Tool from "./Tool/Tool";
export default function Tools() {
    return (
        <div className="Tools">
            <div className="Tools-text">
                <h1>همه ابزارهایی که نیاز دارید</h1>
                <p>تنها قالبی که همیشه به آن نیاز خواهید داشت</p>
            </div>
            <div className="Tool-component">
                <Tool />
                <Tool />
                <Tool />
                <Tool />
                <Tool />
                <Tool />
                <Tool />
                <Tool />
                <Tool />
            </div>

        </div>
    )
}