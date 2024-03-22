import React from 'react';

const Cards = (props) => {
    return (
        <div className="card">
            <section className="column-left">
            <img className="card-img" src={`/img/${props.item.coverImg}`} alt={props.item.coverImg} />
            </section>
            <section className="column-right">
                <h3 className="card-country-title">{props.item.title}</h3>
                <h4 className="card-date mb-3">{props.item.date}</h4>
                <span className="card-country">{props.item.country}</span>
                <a href={props.item.googleMapLink} target="_blank">
                    View on Google Maps
                </a>
                <p>{props.item.description}</p>
                <span>Read more...</span>
            </section>
        </div>
    );
};

export default Cards;
