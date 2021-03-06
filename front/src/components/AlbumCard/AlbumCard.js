import React from 'react';
import imageNotAvailable from '../../assets/images/not_available.png';
import './AlbumCard.css';

const AlbumCard = (props) => {

    const imgSrc = () => {
        if (props.file) {
            return 'http://localhost:8001/public/uploads/' + props.file;
        } else {
            return imageNotAvailable;
        }
    };

    const toExtendedNews = () => {
        return props.history.push('/music/track_' + props.id)
    };

    return (
        <div className="card">
            <div className="card-inner">
                <div className="img">
                    <img src={imgSrc()} alt="img"/>
                </div>
                <div className="card-container">
                    <p>{props.title}</p>
                    <p>{props.release}</p>
                    <p>count</p>
                    <div className="additional-info">
                        <div onClick={toExtendedNews} className="buttons-card">More >>></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AlbumCard;