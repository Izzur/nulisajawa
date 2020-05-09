import React from 'react';
import { encode } from 'hanacaraka';
export default class Transliteration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latin: '', javanese: '' };
    this.tryEncode = this.tryEncode.bind(this);
    this.tryDecode = this.tryDecode.bind(this);
  }
  tryEncode(e) {
    this.setState({ javanese: encode(e.target.value) });
    dispatchEvent(new Event('encodeEvent', { bubbles: true }));
  }
  tryDecode(e) {}
  render() {
    return (
      <form>
        <label>
          Latin:
          <input type="text" name="latin" onChange={this.tryEncode} />
        </label>
        <label>
          Javanese:
          <input
            type="text"
            name="javanese"
            value={this.state.javanese}
            onChange={this.tryDecode}
          />
        </label>
      </form>
    );
  }
}
