import { TestWindow } from '@stencil/core/testing';
import { BinaryClockSeconds } from './binary-clock-seconds';

describe('binary-clock-seconds', () => {
  it('should build', () => {
    expect(new BinaryClockSeconds()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBinaryClockSecondsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BinaryClockSeconds],
        html: '<binary-clock-seconds>' 
          + '</binary-clock-seconds>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
