import React, {Component} from 'react';

class Toggle extends Component {
   render() {
      return <div className="toggle">
              <button onClick={this.props.decrement}> {'<'} Previous</button>
              <div class="unused"><span>Edit</span>
              <span>Delete</span>
              <span>New</span></div>
              <button onClick={this.props.increment}>Next {'>'}</button>
      </div>
   }
}

export default Toggle