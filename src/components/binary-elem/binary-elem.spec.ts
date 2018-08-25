import { TestWindow } from '@stencil/core/testing';
import { BinaryElem } from './binary-elem';

describe('binary-elem', () => {
  it('should build', () => {
    expect(new BinaryElem()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBinaryElemElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BinaryElem],
        html: '<binary-elem>' 
          + '</binary-elem>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
