import React, {useState} from 'react';
import './NewEnemy.css'

const NewEnemy = () => {

    const [select, setSelect] = useState('album');

    const onSubmit = (e) => {
      e.preventDefault();

    };

    const changeInput = () => {
        console.log(select)
        if (select === 'album') {
            return (
                <form onSubmit={() => onSubmit()} className="form">
                    <h2>Add album</h2>
                    <input type="text" placeholder="title" required={true}/>
                    <input type="text" placeholder="artist" required={true}/>
                    <input type="text" placeholder="release" required={true}/>
                    <input type="file"/>
                    <button>submit</button>
                </form>
            )
        } else if (select === 'artist') {
            return (
                <form onSubmit={() => onSubmit()} className="form">
                    <h2>Add artist</h2>
                    <input type="text" placeholder="title" required={true}/>
                    <input type="text" placeholder="information" required={true}/>
                    <input type="file"/>
                    <button>submit</button>
                </form>
            )
        } else if (select === 'track') {
            return (
                <form onSubmit={() => onSubmit()} className="form">
                    <h2>Add track</h2>
                    <input type="text" placeholder="title" required={true}/>
                    <input type="text" placeholder="album" required={true}/>
                    <input type="text" placeholder="duration" required={true}/>
                    <input type="trackId" placeholder="release" required={true}/>
                    <button>submit</button>
                </form>
            )
        }
    };

    return (
        <div>
            <h2>Add new Enemy</h2>
            <select onChange={e => setSelect(e.target.value)}>
                <option value="album">album</option>
                <option value="artist">artist</option>
                <option value="track">track</option>
            </select>
            {changeInput()}
        </div>
    );
};

export default NewEnemy;