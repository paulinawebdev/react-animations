import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Trail } from 'react-spring/renderprops';

export default class Spotlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCharacter: 0,
            show: true,
            theme: this.props.theme
        }
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.theme !== this.props.theme) {
            this.setState({activeCharacter: 0, theme: this.props.theme})
        }
    }

    handleIconClick(e) {
        let clickedIcon = e.target.getAttribute('data-index');
        this.setState({activeCharacter: clickedIcon});
    }

    render() {
        const character = this.state.activeCharacter;
        const spotlightItems = this.props.items;

        return(
            <React.Fragment>
            <div className={"spotlight " + this.state.theme}>
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
                    <Trail items={spotlightItems} keys={(spotlightItem) => spotlightItem.id} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        {(spotlightItem, index) => props => <img key={index} style={props} className={index  === parseInt(this.state.activeCharacter) ? "active" : ""} data-index={index} onClick={this.handleIconClick} src={spotlightItem.thumbnail} alt={spotlightItem.name} />}
                    </Trail>
                </div>
            </div>
            
            </React.Fragment>
        )
    }
}
