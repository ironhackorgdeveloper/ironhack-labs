import React, { Component } from 'react';

class FormField extends Component {
  render(){
    return(
      <form className="field">
        <label className="label">{this.props.label}
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </label>
      </form>
    );
  };
};

export default FormField;
