import { TestWindow } from '@stencil/core/testing';
import { BinaryClockMinutes } from './binary-clock-minutes';

describe('binary-clock-minutes', () => {
  it('should build', () => {
    expect(new BinaryClockMinutes()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBinaryClockMinutesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BinaryClockMinutes],
        html: '<binary-clock-minutes>' 
          + '</binary-clock-minutes>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
