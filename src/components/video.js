import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import { ReactComponent as DivaIntroIcon } from '../images/icons/diva-intro.svg';

const pages = [
  style => (
    <animated.div className="video-content" style={{ ...style }}>
      <video className="ability-showcase-video" muted="muted" autoPlay loop>
        <source type="video/webm" src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/intro-video.webm"/>
        <source type="video/mp4" src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/intro-video.mp4"/>
      </video>
    </animated.div>
  ),
  style => (
    <animated.div className="video-content" style={{ ...style }}>
      <video className="ability-showcase-video" muted="muted" poster="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/ability-light-gun/thumb-ability.jpg" autoPlay loop>
        <source type="video/webm" src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/ability-light-gun/video-ability.webm" />
        <source type="video/mp4" src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/ability-light-gun/video-ability.mp4" />
      </video>
    </animated.div>
  ),
  style => (
    <animated.div className="video-content" style={{ ...style }}>
      <video className="ability-showcase-video" muted="muted" poster="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/ability-boosters/thumb-ability.jpg"  autoPlay loop>
        <source type="video/webm" src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/ability-boosters/video-ability.webm" />
        <source type="video/mp4" src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/ability-boosters/video-ability.mp4" />
      </video>
    </animated.div>
  ),
]

export default class Video extends React.PureComponent {
  
  state = { index: 0 }

  toggle = event => {
    let dataPosition = event.target.getAttribute("data-index");
    this.setState(state => ({
      index: dataPosition
    }))
  }

  // state = { index: 0 }
  // toggle = e =>
  //   this.setState(state => ({
  //     index: state.index === 2 ? 0 : state.index + 1,
  //   }))
    
  render() {
    return (
      <div className="video-slider">
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {index => pages[index]}
        </Transition>
        <div className="video-icons" >
          <div className="video-icon" data-index="0" onClick={this.toggle}><DivaIntroIcon /></div>
          <div className="video-icon" data-index="1" onClick={this.toggle}><DivaIntroIcon/></div>
          <div className="video-icon" data-index="2" onClick={this.toggle}><DivaIntroIcon/></div>
          <div className="video-icon" data-index="3" onClick={this.toggle}><DivaIntroIcon/></div>
        </div>
      </div>
    )
  }
}