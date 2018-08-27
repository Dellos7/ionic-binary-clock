import { Component, State, Element, Prop } from '@stencil/core';
import { BinaryComponent, BinaryClockComponentType } from '../../global/binary-component';

@Component({
  tag: 'binary-clock-hour',
  styleUrl: 'binary-clock-hour.css'
})
export class BinaryClockHour extends BinaryComponent {

  timer: number;
  @State() time: Date;
  @Prop() elemSize: string;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setTimer( BinaryClockComponentType.HOUR, 1000 );
  }

  componentDidUnload() {
    this.removeTimer();
  }

  render() {
    const elemSize = this.elemSize;
    return (
      <div class="center-content">
        <binary-elem iconName="time" size={elemSize}></binary-elem>
        <binary-elem pos="16" size={elemSize}></binary-elem>
        <binary-elem pos="8"  size={elemSize}></binary-elem>
        <binary-elem pos="4"  size={elemSize}></binary-elem>
        <binary-elem pos="2"  size={elemSize}></binary-elem>
        <binary-elem pos="1"  size={elemSize}></binary-elem>
        <label class="label">hours</label>
      </div>
    );
  }
}
