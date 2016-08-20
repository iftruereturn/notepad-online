import React from 'react';

class Loader extends React.Component {
  
  render() {
    const { text } = this.props;

    return (
      <div className="loader" ref={ node => this.loader = node }>
        <div className="loader-container">
          ...{text}...
        </div>
      </div>
    );
  }

}

export default Loader;