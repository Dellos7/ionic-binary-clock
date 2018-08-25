import { TestWindow } from '@stencil/core/testing';
import { BinaryClockHour } from './binary-clock-hour';

describe('binary-clock-hour', () => {
  it('should build', () => {
    expect(new BinaryClockHour()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBinaryClockHourElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BinaryClockHour],
        html: '<binary-clock-hour>' 
          + '</binary-clock-hour>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
