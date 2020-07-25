import React, {Component} from 'react';
import Data from '../data'

class Box extends Component {
    


    render() {
        const {data, index} = this.props
        return <div className='box'>
            <div className="left">
                <span className='name'>{data[index].name['first']} {data[index].name['last']}</span>
                <div className="info">
                    <strong>From: </strong>{data[index].city}, {data[index].country} <br/>
                    <strong>Job Title: </strong>{data[index].title} <br/>
                    <strong>Employer: </strong>{data[index].employer}
                </div>
                <div className="favMovies">
                    <strong>Favorite Movies:</strong>
                </div>
                <ol className="movies"> 
                    <li>{data[index].favoriteMovies[0]} </li>
                    <li>{data[index].favoriteMovies[1]} </li>
                    <li>{data[index].favoriteMovies[2]} </li>
                </ol>
            </div>
            <div className="right">
                <div className="id">{data[index].id}/25</div>
            </div>
        </div>
    }
}

export default Box