import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./VirtualTour.css";
import VirtualTourViewer from "./VirtualTourViewer";
import LocationCard from "./LocationCard";
import img1 from '../assets/MainCourt.jpg'
import img2 from '../assets/SoccerField.jpg'
import img3 from '../assets/OlympicsPool.jpg'
import img4 from '../assets/TrainingGym.jpg'




const locations = [
    {id: 1, label: "Main Court", tag:"CURRENT", img: img1},
    {id: 2, label: "Soccer Field", tag: null , img: img2},
    {id: 3, label: "Olympic Pool", tag: null , img: img3},
    {id: 4, label: "Training Gym", tag: null , img: img4}
];

function VirtualTourSection() {
    const [activeId, setActiveId] = useState(1);
    const [isZoomed, setIsZoomed] = useState(false);
    const viewerRef = useRef(null);

    function handleCardClick(id) {
        setActiveId(id);
    }

    const currentLocation = locations.find(function(loc) {
        return loc.id === activeId;
    });
    
    function handleScreenshot() {
        html2canvas(viewerRef.current).then(function(canvas) {
            const link = document.createElement("a");
            link.download = `${currentLocation.label}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    function handleZoom() {
        setIsZoomed(function(prev) {return !prev; });
    }

    return (
        <section className="tour-section">
            <div className="tour-header">
                <div>
                    <h1 className="tour-title">Virtual Tour Experience</h1>
                    <p className="tour-subtitle"> Explore our world-class facilities in high-definition 360°</p>
                </div>
                <div className="tour-controls">
                    <button className="tour-icon-btn" onClick={handleScreenshot}>SCREENSHOT</button>
                    <button className="tour-icon-btn" onClick={handleZoom}>{isZoomed ? "ZOOM OUT" : "ZOOM"}</button>
                </div>
            </div>

            <VirtualTourViewer
             key={activeId}
             currentLocation={currentLocation.label}
             currentImg= {currentLocation.img}
             viewerRef={viewerRef}
             isZoomed={isZoomed} /> 

            <p className="gallery-label">LOCATION GALLERY</p>
            <div className="gallery-grid">
                {locations.map(function(loc) {
                    return (
                        <LocationCard 
                        key={loc.id} 
                        label={loc.label}
                        tag={loc.tag}
                        img={loc.img}
                        isActive={loc.id === activeId}
                        onClick={function() {setActiveId(loc.id);}} />
                    );
                })}

            </div>
        </section>
    )
}

export default VirtualTourSection;