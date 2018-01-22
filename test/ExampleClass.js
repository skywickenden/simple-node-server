import should from 'should';

import ExampleClass from '../src/js/ExampleClass.js';

describe('Matrix', function() {
  describe('constructor', function() {
    const exampleClass = new ExampleClass(5);
    it('should have a property prop with a value of 5 once instantiated', function() {
      exampleClass.prop.should.equal(5);
    });
  });
});
