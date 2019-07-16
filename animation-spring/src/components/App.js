import React from 'react';
import '../scss/theme.scss';
import Spotlight from './spotlight';
import Header from './header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Video from './video';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "nexon"
    }

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme === "overwatch") {
      this.setState({ theme: "nexon"});
    } else if(this.state.theme === "nexon") {
      this.setState({ theme: "overwatch" });
    }
  }

  render() {

    const blizzardCharInfo = [
      {
        name: "Ana",
        desc: "This Overwatch stalwart has emerged from years of seclusion to defend a new generation.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/full-portrait.png"
      },
      {
        name: "Ashe",
        desc: "The leader of the notorious Deadlock Gang menaces the American Southwest.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/full-portrait.png"
      },
      {
        name: "D.VA",
        desc: "A former pro gamer who now pilots a state-of-the-art mech in defense of her homeland.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/full-portrait.png"
      },
      {
        name: "Bastion",
        desc: "A transforming robot who explores the world; fascinated by nature, but wary of humanity.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/full-portrait.png"
      },
      {
        name: "Junkrat",
        desc: "An explosives-obsessed freak who lives to cause chaos and destruction.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/full-portrait.png"
      },
      {
        name: "Widowmaker",
        desc: "A perfect assassin: patient, ruthlessly efficient, and without emotion or remorse.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/full-portrait.png"
      },
      {
        name: "Roadhog",
        desc: "A ruthless killer with tremendous strength and a reputation for cruelty and wanton destruction.",
        thumbnail: "https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/icon-portrait.png",
        fullImg: "https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/full-portrait.png"
      },
    ];
  
    const mapleCharInfo = [
      {
        name: "Striker",
        desc: "These henchmen are just disappointing. They rely on magic or gadgets, and even worse, they refuse to attack me one at a time!",
        thumbnail: "http://nxcache.nexon.net/cms/2019/Q2/2456/striker-class-page-assets-thumb_265x210.png",
        fullImg: "http://nxcache.nexon.net/cms/2019/Q2/2457/ms2w-1255-190520-striker-class-page-assets-portrait_400x500.png"
      },
      {
        name: "Berserker",
        desc: "My kind of Anger Management is thinking of some things before I jump into battle. My friends getting hurt, bullies insulting me, people that talk during a show...",
        thumbnail: "http://nxcache.nexon.net/cms/2018/4221/berserker.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/4224/character.png"
      },
      {
        name: "Runeblade",
        desc: "Every time someone tries to rush the Storm Sigil, they don't get it quite right and forget they're holding a metal sword!",
        thumbnail: "http://nxcache.nexon.net/cms/2018/4741/runeblade_thumb_265x210.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/4740/runeblade_portrait_400x500.png"
      },
      {
        name: "Thief",
        desc: "I rob from the rich and give to the poor! Most of it goes to the poor, anyway. After expenses, so many expenses...",
        thumbnail: "http://nxcache.nexon.net/cms/2018/4222/thief.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/4218/character.png"
      },
      {
        name: "Heavy Gunner",
        desc: "The hardest part is knowing when to stop firing. Some people stop when they see the Mushroom drop.  But I like grilled mushrooms, soooo..",
        thumbnail: "http://nxcache.nexon.net/cms/2018/4237/heavy-gunner.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/4233/character.png"
      },
      {
        name: "Soul Binder",
        desc: "Animus energy isn't magic, it's a deep, spiritual connection to an ancient power... that I use to summon orbs that blow things up.",
        thumbnail: "http://nxcache.nexon.net/cms/2018/6508/ms2w-901-181204-soul-binder-thumb_265x210.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/6509/ms2w-901-181204-soul-binder-portrait_400x500.png"
      },
      {
        name: "Wizard",
        desc: "I mean, technically everything is flammable eventually. Also, sorry about the drapes. And the rug. And the couch.",
        thumbnail: "http://nxcache.nexon.net/cms/2018/4212/wizard.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/4209/character.png"
      },
      {
        name: "Priest",
        desc: "Okay everyone, remember! Don't get too far away from me, follow the Knight's lead and please stay out of the fire. GET OUT OF THE F-",
        thumbnail: "http://nxcache.nexon.net/cms/2018/4223/priest.png",
        fullImg: "http://nxcache.nexon.net/cms/2018/4227/character.png"
      },
    ];

    let data = "";

    if (this.state.theme === "overwatch") {
      data = blizzardCharInfo;
    } else if (this.state.theme === "nexon") {
      data = mapleCharInfo;
    }

    return (
      <Router>
        <div className="app">
          <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Route exact path="/" render={props =>
            <Spotlight {...props} theme={this.state.theme} items={data} />
            } />
          <Route path="/video" component={Video} />
        </div>
      </Router>
    );
  }
  
}
