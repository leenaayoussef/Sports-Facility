import './VirtualTour.css';

function LocationCard(props) {
    return (
        <div className={'location-card ${props.isActive ? "active" : ""}'}  
        onClick={props.onClick}>
        <img src={props.img} alt={props.label} className='card-img' />
        
        {props.tag && <span className='card-tag'>{props.tag}</span>}
        <p className='card-label'>{props.label}</p>
        </div>
    );
}

export default LocationCard;