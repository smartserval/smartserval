import React from 'react';

class Tank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {automatic: props.automatic, stars: 0};
  }

  componentDidMount() {
    if (this.state.automatic) {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  }

  componentWillUnmount() {
    if (this.state.automatic) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    var newStars = this.state.stars > 29 ? 30 : this.state.stars + 1
    this.setState({
      stars: newStars
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.stars}.</h2>
      </div>
    );
  }
}

export default Tank;
