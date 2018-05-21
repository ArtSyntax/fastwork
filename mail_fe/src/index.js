import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label>
          {this.props.name}
          <input type="text" value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label>
          {this.props.name}
          <textarea rows={5} value={this.props.text} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}


class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_email: '',
      subject: '',
      text: '',
      from_email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, f) {
    this.setState({
     ...this.state,
     [f]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.to_email + ' ' + this.state.subject+ ' ' +this.state.text+ ' ' +this.state.from_email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextBox name={'to_email'} value={this.state.to_email} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextBox name={'subject'} value={this.state.subject} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextArea name={'text'} value={this.state.text} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextBox name={'from_email'} value={this.state.from_email} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <EmailForm />
        </div>
        <div className="app-content">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
