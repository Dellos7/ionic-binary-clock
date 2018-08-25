import { Component, State, Element } from '@stencil/core';
import { BinaryClockUtils } from '../../global/binary-clock-utils';
import { BinaryComponent } from '../../global/binary-component';


@Component({
  tag: 'binary-clock-hour',
  styleUrl: 'binary-clock-hour.css'
})
export class BinaryClockHour extends BinaryComponent {

  timer: number;
  @State() time: Date;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.timer = window.setInterval(() => {
      let time = new Date();
      if( time ) {
        let hours: number = time.getHours();
        let binary: number[] = BinaryClockUtils.decimalNumberToBinary( hours );
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
        <binary-elem pos="16"></binary-elem>
        <binary-elem pos="8"></binary-elem>
        <binary-elem pos="4"></binary-elem>
        <binary-elem pos="2"></binary-elem>
        <binary-elem pos="1"></binary-elem>
      </div>
    );
  }
}
