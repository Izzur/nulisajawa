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
  swapDirection() {
    this.setState({ direction: !this.state.direction });
    dispatchEvent(new Event('swapEvent', { bubbles: true }));
  }
  render() {
    return (
      <form>
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
        <button onClick={this.swapDirection}>SWAP</button>
      </form>
    );
  }
}
