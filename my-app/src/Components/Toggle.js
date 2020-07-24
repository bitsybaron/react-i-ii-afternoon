import React, {Component} from 'react';

class Toggle extends Component {
   render() {
      return <div>
          <div>
              <button onClick={this.props.decrement}> {'<'} Previous</button>
              <div className="unused"><span>Edit</span>
              <span>Delete</span>
              <span>New</span></div>
              <button onClick={this.props.increment}>Next {'>'}</button>
          </div>
      </div>
   }
}

export default Toggle