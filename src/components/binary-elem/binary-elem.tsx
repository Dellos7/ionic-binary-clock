import { Component, Prop, Element, Method, State } from '@stencil/core';

export enum BinaryElemSize {
  LARGE = "large",
  NORMAL = "normal",
  SMALL = "small"
}

@Component({
  tag: 'binary-elem',
  styleUrl: 'binary-elem.css'
})
export class BinaryElem {

  @Element() el: HTMLElement;
  @State() active: boolean = false;
  @Prop() pos: string;
  @Prop() size: string;
  @Prop() iconName: string = "logo-ionic";

  @Method()
  updateElement( active: boolean ) {
    if( active ) {
      this.el.querySelector('ion-icon').classList.add('active');
      this.el.querySelector('ion-icon').classList.remove('inactive');
    }
    else {
      this.el.querySelector('ion-icon').classList.remove('active');
      this.el.querySelector('ion-icon').classList.add('inactive');
    }
    this.active = active;
  }

  render() {
    const classes = `${this.size} ${this.pos ? ' inactive' : ''}`;
    return (
      <ion-icon name={this.iconName} class={classes}></ion-icon>
    );
  }
  
}
