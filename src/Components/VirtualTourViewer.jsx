import { useState } from "react";
import "./VirtualTour.css";

function VirtualTourViewer(props) {

    const [posX, setPosX] = useState(50);
    const [posY, setPosY] = useState(50);

    function moveUp() {
        setPosY(function(prev) { return Math.max(0, prev - 10); })
    }

    function moveDown() {
        setPosY(function(prev) { return Math.min(100, prev + 10); })

    }

    function moveLeft() {
        setPosX(function(prev) { return Math.max(0, prev - 10); })

    }

    function moveRight() {
        setPosX(function(prev) { return Math.min(100, prev + 10); })
    }


    return (
        <div className={`tour-viewer ${props.isZoomed ? "zoomed" : ""}`}
        ref={props.viewerRef}>
            <div
             className="viewer-img"
             style={{ backgroundImage: `url(${props.currentImg})`, backgroundPosition: `${posX}% ${posY}%` }}
             alt={props.currentLocation} />
             
            <div className="viewer-label">
                <p className="small">Currenlty Viewing</p>
                <p className="name">{props.currentLocation}</p>
            </div>

            <div className="viewer-compass">N</div>

            {/* <div className="viewer-arrrows">{["↑", "", "", "←", "↓", "→"].map(function(arrow, i) {
                if (!arrow) return <div key={i}/>;
                return <button key={i} className="arrow-btn">{arrow}</button>
            })}
            </div> */}
            <div className="viewer-arrows">
                <div />
                <button className="arrow-btn" onClick={moveUp}>↑</button>
                <div />
                <button className="arrow-btn" onClick={moveLeft}>←</button>
                <button className="arrow-btn" onClick={moveDown}>↓</button>
                <button className="arrow-btn" onClick={moveRight}>→</button>
            </div>

            <button className="viewer-start-btn"> START GUIDED TOUR</button>
        </div>
    )
}

export default VirtualTourViewer;