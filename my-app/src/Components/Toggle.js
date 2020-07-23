import React, {Component} from 'react';

class Toggle extends Component {
   render() {
      return <div>
          <div>
              <button onClick={this.props.decrement}>Previous</button>
              <span>Edit</span>
              <span>Delete</span>
              <span>New</span>
              <button onClick={this.props.increment}>Next</button>
          </div>
      </div>
   }
}

export default Toggle