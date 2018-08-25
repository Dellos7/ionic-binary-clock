import { Component, State, Element } from '@stencil/core';
import { BinaryComponent } from '../../global/binary-component';
import { BinaryClockUtils } from '../../global/binary-clock-utils';


@Component({
  tag: 'binary-clock-minutes',
  styleUrl: 'binary-clock-minutes.css'
})
export class BinaryClockMinutes extends BinaryComponent {

  timer: number;
  @State() time: Date;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.timer = window.setInterval(() => {
      let time = new Date();
      if( time ) {
        let minutes: number = time.getMinutes()
        let binary: number[] = BinaryClockUtils.decimalNumberToBinary( minutes );
        this.updateBinaryView( binary );
        this.time = time;
      }
    }, 1000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <binary-elem pos="32"></binary-elem>
        <binary-elem pos="16"></binary-elem>
        <binary-elem pos="8"></binary-elem>
        <binary-elem pos="4"></binary-elem>
        <binary-elem pos="2"></binary-elem>
        <binary-elem pos="1"></binary-elem>
      </div>
    );
  }
}
