import { Component, Prop } from '@stencil/core';
import 'ionicons';
import '@ionic/core';

@Component({
  tag: 'binary-clock',
  styleUrl: 'binary-clock.css'
})
export class BinaryClock {

  @Prop() elemSize: string = "large";

  render() {
    return (
      <div>
        <binary-clock-hour elemSize={this.elemSize}></binary-clock-hour>
        <binary-clock-minutes elemSize={this.elemSize}></binary-clock-minutes>
        <binary-clock-seconds elemSize={this.elemSize}></binary-clock-seconds>
      </div>
    );
  }
}
