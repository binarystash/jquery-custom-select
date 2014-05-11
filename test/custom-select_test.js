(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#custom-select', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    strictEqual(this.elems.customSelect(), this.elems, 'should be chainable');
  });

  test('creates dummy', function() {
    expect(1);
    $('select').customSelect();
    strictEqual($('.custom-select-display').length, 1, 'should create dummy');
  });

  test('displays correct value in dummy', function() {
    expect(1);

    $('select').customSelect();
    strictEqual($('.custom-select-display').text(), 'Value 1', 'should display correct value in dummy');
  
  });

  test('adds focused class', function() {
    expect(1);

    $('select').customSelect();
    $('select').trigger('focus');
    strictEqual($('.custom-select-display').hasClass('focused'), true, 'should add focused class');
  
  });

}(jQuery));
