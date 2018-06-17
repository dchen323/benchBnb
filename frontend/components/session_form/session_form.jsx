import React from 'react';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';
import { Route, Redirect } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username: </label>
          <input type="text" value={this.state.username} onChange={this.update("username")}></input>
            <label>Password: </label>
            <input type="password" value={this.state.password} onChange={this.update("password")}></input>
            <input type="submit" value={this.props.formType}></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
