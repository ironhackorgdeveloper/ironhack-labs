import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
        
    const bulmaClass = {
      isActive: 'is-active',
      isBlack: 'is-black',
      isCentered: 'is-centered',
      isDanger: 'is-danger',
      isDark: 'is-dark',
      isFocused: 'is-focused',
      isGrouped: 'is-grouped',
      isHovered: 'is-hovered',
      isInfo: 'is-info',
      isInverted: 'is-inverted',
      isLarge: 'is-large',
      isLight: 'is-light',
      isLink: 'is-link',
      isLoading: 'is-loading',
      isMedium: 'is-medium',
      isOutlined: 'is-outlined',
      isPrimary: 'is-primary',
      isRight: 'is-right',
      isRounded: 'is-rounded',
      isSelected: 'is-selected',
      isSmall: 'is-small',
      isStatic: 'is-static',
      isSuccess: 'is-success',
      isText: 'is-text',
      isWarning: 'is-warning',
      isWhite: 'is-white',
    }
    let keys = '';
    for (let key in bulmaClass) {
      if (this.props[key]) {
        keys += ' ' + bulmaClass[key];
      }
    }

    return(
      <button type={this.props.type} className={`button ${this.props.className}${keys}`}>{this.props.name}</button>
    )
  }
}

export default CoolButton;
