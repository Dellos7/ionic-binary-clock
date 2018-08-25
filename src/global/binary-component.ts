
export class BinaryComponent {

    //@Element() el: HTMLElement;
    el: HTMLElement;

    updateBinaryView( binary: number[] ) {
        //let binaryElems = this.el.getElementsByTagName('binary-elem');
        let binaryElems = Array.from( this.el.querySelectorAll('binary-elem') );
        binaryElems.forEach( (el) => {
          /*el.classList.remove('active');
          el.classList.add('inactive');*/
          el.updateElement(false);
        });
        for( let b of binary ) {
          let bElsFilter = binaryElems.filter( (el) => { return el.pos === b.toString() } );
          if( bElsFilter && bElsFilter[0] ) {
            let el = bElsFilter[0];
            el.updateElement(true);
          }
        }
      }

}