import { TestWindow } from '@stencil/core/testing';
import { BinaryClock } from './binary-clock';

describe('binary-clock', () => {
  it('should build', () => {
    expect(new BinaryClock()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBinaryClockElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BinaryClock],
        html: '<binary-clock>' 
          + '</binary-clock>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
