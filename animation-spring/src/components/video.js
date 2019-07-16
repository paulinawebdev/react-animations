import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';

const pages = [
  style => (
    <animated.div>A</animated.div>
  ),
  style => (
    <animated.div>B</animated.div>
  ),
  style => (
    <animated.div>C</animated.div>
  ),
]

export default class Video extends React.PureComponent {
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
    }))
  render() {
    return (
      <div className="main" onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
          {index => pages[index]}
        </Transition>
      </div>
    )
  }
}