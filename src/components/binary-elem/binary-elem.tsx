import { Component, Prop, Element, Method, State } from '@stencil/core';

@Component({
  tag: 'binary-elem',
  styleUrl: 'binary-elem.css'
})
export class BinaryElem {

  @Element() el: HTMLElement;
  @Prop() pos: string;
  @State() active: boolean = false;

  componentDidLoad() {
    
  }

  render() {
    return (
        <ion-icon name="logo-ionic" size="large" class="inactive"></ion-icon>
    );
  }

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
}
