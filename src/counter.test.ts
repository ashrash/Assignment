import chai from 'chai';
import counterFunc from './counter';
import 'mocha';

describe('Counter unit tests', () => {
  it('Check initial value', () => {
    const [getCounter] = counterFunc(10);
    chai.expect(getCounter()).equals(10);
  });

  it('Check default value', () => {
    const [getCounter] = counterFunc();
    chai.expect(getCounter()).equals(0);
  })

  it('Increment value', () => {
    const [getCounter, counterIncByOne] = counterFunc(1);
    counterIncByOne();
    counterIncByOne();
    chai.expect(counterIncByOne()).equal(undefined);
    chai.expect(getCounter()).equals(4);
  })
})