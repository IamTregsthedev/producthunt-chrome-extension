jest.autoMockOff();

describe('Pane', function() {
  let Pane = require('../Pane.react');
  let React = require('react/addons');
  let TestUtils = React.addons.TestUtils;

  describe('with no url', function() {
    it('does not render', function() {
      let pane = TestUtils.renderIntoDocument(<Pane />);
      expect(pane.getDOMNode()).toBeNull();
    });
  });

  describe('with url', function() {
    it('renders the iframe', function() {
      let pane = TestUtils.renderIntoDocument(<Pane url="http://example.com" />);
      let iframe = pane.getDOMNode().querySelector('#__phc-product-pane');

      expect(iframe.src).toEqual('http://example.com');
    });

    it('appends an overlay', function() {
      let pane = TestUtils.renderIntoDocument(<Pane url="http://example.com" />);
      let overlay = pane.getDOMNode().querySelector('.__phc-overlay');

      expect(overlay).toBeTruthy();
    });

    it('adds a class to the body', function() {
      let className = 'body-class';
      let pane = TestUtils.renderIntoDocument(<Pane bodyClass={className} url="http://example.com" />);
      expect(document.body.classList.contains('body-class')).toBeTruthy();
    });
  });
});
