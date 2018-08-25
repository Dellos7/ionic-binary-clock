import { Component } from '@stencil/core';
import 'ionicons';

@Component({
  tag: 'binary-clock',
  styleUrl: 'binary-clock.css'
})
export class BinaryClock {

  render() {
    return (
      <div>
        <binary-clock-hour></binary-clock-hour>
        <binary-clock-minutes></binary-clock-minutes>
        <binary-clock-seconds></binary-clock-seconds>
      </div>
    );
  }
}
