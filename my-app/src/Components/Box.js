import React, {Component} from 'react';
import Data from '../data'

class Box extends Component {
    


    render() {
        const {data, index} = this.props
        return <div>
            <div className="left">
                <div className='name'>{data[index].name['first']} {data[index].name['last']}</div>
                <div className="info">
                    From: {data[index].city}, {data[index].country} <br/>
                    Job Title: {data[index].title} <br/>
                    Employer: {data[index].employer}
                </div>
                <div className="favMovies">
                    Favorite Movies:
                </div>
                <div className="movies"> 
                    1. {data[index].favoriteMovies[0]} <br/>
                    2. {data[index].favoriteMovies[1]} <br/>
                    3. {data[index].favoriteMovies[2]} <br/>
                </div>
            </div>
            <div className="right">
                <div className="id">{data[index].id}/25</div>
            </div>
        </div>
    }
}

export default Box