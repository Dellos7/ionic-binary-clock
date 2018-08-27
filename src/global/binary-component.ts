import { BinaryClockUtils } from './binary-clock-utils';

export enum BinaryClockComponentType {
  HOUR = "hour",
  MINUTES = "minutes",
  SECONDS = "seconds"
}

export class BinaryComponent {

  el: HTMLElement;
  timer: number;
  time: Date;
  elemSize: string;

  updateView(binary: number[]) {
    let binaryElems = Array.from(this.el.querySelectorAll('binary-elem'));
    binaryElems.forEach((el) => {
      if(el.pos) {
        el.updateElement(false);
      }
    });
    for (let b of binary) {
      let bElsFilter = binaryElems.filter((el) => { return el.pos === b.toString() });
      if (bElsFilter && bElsFilter[0]) {
        bElsFilter[0].updateElement(true);
      }
    }
  }

  setTimer( type: BinaryClockComponentType, msInterval: number ) {
    this.timer = window.setInterval(() => {
      let time = new Date();
      if( time ) {
        let n: number;
        switch( type ) {
          case BinaryClockComponentType.HOUR:
            n = time.getHours();
            break;
          case BinaryClockComponentType.MINUTES:
            n = time.getMinutes();
            break;
          case BinaryClockComponentType.SECONDS:
            n = time.getSeconds();
            break;
        }
        let binary: number[] = BinaryClockUtils.decimalNumberToBinary( n );
        this.updateView( binary );
        this.time = time;
      }
    }, msInterval);
  }

  removeTimer() {
    window.clearInterval( this.timer );
  }

}