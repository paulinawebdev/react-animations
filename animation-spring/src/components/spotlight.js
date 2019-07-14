import React from 'react';
import './spotlight.scss';

export default class Spotlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCharacter: 0
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
        return(
            <div className="spotlight">
                <div className="spotlight-main">
                    <div className="spotlight-img">
                        <img src={spotlightItems[character].fullImg} alt={spotlightItems[character].name} />
                    </div>
                    <div className="spotlight-info">
                        <div className="spotlight-title">{spotlightItems[character].name}</div>
                        <div className="spotlight-desc">{spotlightItems[character].desc}</div>
                    </div>
                </div>
                <div className="thumbnails">
                    {icon}
                </div>
            </div>
        )
    }
}
