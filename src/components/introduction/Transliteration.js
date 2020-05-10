import React from 'react';
import { encode, decode } from 'hanacaraka';
export default class Transliteration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { direction: true, output: '' };
    this.tryEncode = this.tryEncode.bind(this);
    this.swapDirection = this.swapDirection.bind(this);
  }
  tryEncode(e) {
    const func = this.state.direction ? encode : decode;
    this.setState({ output: func(e.target.value) });
    dispatchEvent(new Event('encodeEvent', { bubbles: true }));
  }
  swapDirection(e) {
    e.preventDefault();
    this.setState({ direction: !this.state.direction });
  }
  render() {
    return (
      <form onSubmit={this.swapDirection}>
        <label>
          {this.state.direction ? 'Latin' : 'Javanese'}:
          <input type="text" name="latin" onChange={this.tryEncode} />
        </label>
        <label>
          {this.state.direction ? 'Javanese' : 'Latin'}:
          <input
            type="text"
            name="javanese"
            value={this.state.output}
            readOnly
          />
        </label>
        <br />
        &nbsp;
        <input type="submit" value="SWAP"/>
      </form>
    );
  }
}
