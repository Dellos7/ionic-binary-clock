import { Component, State, Element, Prop } from '@stencil/core';
import { BinaryComponent, BinaryClockComponentType } from '../../global/binary-component';


@Component({
  tag: 'binary-clock-minutes',
  styleUrl: 'binary-clock-minutes.css'
})
export class BinaryClockMinutes extends BinaryComponent {

  timer: number;
  @State() time: Date;
  @Prop() elemSize: string;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setTimer( BinaryClockComponentType.MINUTES, 1000 );
  }

  componentDidUnload() {
    this.removeTimer();
  }

  render() {
    const elemSize = this.elemSize;
    return (
      <div class="center-content">
        <binary-elem pos="32" size={elemSize}></binary-elem>
        <binary-elem pos="16" size={elemSize}></binary-elem>
        <binary-elem pos="8"  size={elemSize}></binary-elem>
        <binary-elem pos="4"  size={elemSize}></binary-elem>
        <binary-elem pos="2"  size={elemSize}></binary-elem>
        <binary-elem pos="1"  size={elemSize}></binary-elem>
        <label class="label">minutes</label>
      </div>
    );
  }
}
