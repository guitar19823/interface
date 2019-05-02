import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import sound from '../../sounds/3.mp3';

const Navigation = (WrappedComponent, path) => {
  class WithNavigation extends Component {
  	state = {
      onEnter: false,
      onEscape: false,
      closed: false,
      menuClose: false,
      path: null
    }

    handleKey = (event) => {
      switch (event.key) {
        case 'Enter':
          this.handleEnter();
          break;

        case 'Escape':
          this.closePage('close-right', {
            onEscape: true
          });
          break;

        default:
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
      setTimeout(() => {
        this.settings.focus();
      }, 500);
    }

    render() {
      if (path !== '/') {
        if (this.state.onEscape) {
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