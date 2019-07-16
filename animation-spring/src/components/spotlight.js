import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default class Spotlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCharacter: 0,
            show: true
        }
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick(e) {
        let clickedIcon = e.target.getAttribute('data-index');
        this.setState({activeCharacter: clickedIcon});
    }

    render() {
        const character = this.state.activeCharacter;
        const spotlightItems = this.props.items;
        const icon = spotlightItems.map((item, index) => <img onClick={this.handleIconClick} key={index} data-index={index} src={item.thumbnail} alt={item.name} />);

        let spotlightTheme = this.props.theme;

        return(
            <div className={"spotlight " + spotlightTheme}>
                <div className="spotlight-main">
                    <div className="spotlight-img">
                        <Spring
                            from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
                            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            reset="true"
                            delay="200">
                            {props => <img style={ props } src={spotlightItems[character].fullImg} alt={spotlightItems[character].name} />}
                        </Spring>
                    </div>
                    
                    <Spring
                        from={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                        to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        reset="true"
                        delay="200">
                        {props =>
                        <div style={ props } className="spotlight-info">
                            <div className="spotlight-title">{spotlightItems[character].name}</div>
                            <div className="spotlight-desc">{spotlightItems[character].desc}</div>
                        </div>
                    }
                    </Spring>
                        
                </div>
                <div className="thumbnails">
                    {icon}
                </div>
            </div>
        )
    }
}
