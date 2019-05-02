import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import sound from '../../sounds/3.mp3';

const Navigation = (WrappedComponent, path) => {
  class WithNavigation extends Component {
  	state = {
      onEnter: false,
      onHome: false,
      closed: false,
      menuClose: false,
      path: null
    }

    handleKey = (event) => {
      switch (event.key) {
        case 'Enter':
          this.handleEnter();
          break;

        case 'Home':
          this.closePage('close-right', {
            onHome: true
          });
          break;

        default: console.log(event.key)
          break;
      }
    }

    handleEnter = () => {
    	this.setState({
        onEnter: true
      });
    }

    closePage = (className, state) => {
      this.settings.classList.add(className);

      if (!this.state.closed) {
        this.audio.play();
        
        setTimeout(() => {
          this.setState(state);
        }, 500);

        this.setState({
          closed: true
        });
      }
    }

    componentDidMount() {
       this.settings.focus();
    }

    render() {
      if (path !== '/') {
        if (this.state.onHome) {
          return <Redirect to="/" />;
        }
      	
      	return (
      		<div
      			className="navigation"
            onKeyDown={(event) => this.handleKey(event)}
            tabIndex="0"
            ref={elem => this.settings = elem}
          >
            <audio src={sound} ref={audio => this.audio = audio}></audio>
          	<WrappedComponent
              handleEnter={this.handleEnter}
              closePage={this.closePage}
            />
          </div>
        );
      } else {
        if (this.state.path) {
          return <Redirect to={this.state.path} />;
        }

        return (
          <div
            className="navigation"
            ref={elem => this.settings = elem}
          >
            <audio src={sound} ref={audio => this.audio = audio}></audio>
            <WrappedComponent
              closePage={this.closePage}
            />
          </div>
        );
      }
  	}
  }

  return WithNavigation;
};

export default Navigation;