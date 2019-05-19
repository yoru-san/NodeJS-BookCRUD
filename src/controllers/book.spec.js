const chai = require('chai');
const spies = require('chai-spies');
chai.should();
chai.use(spies);
const spy = chai.spy;
const mock = require('mock-require');

describe('counter', () => {
    let counter;
    let spiedSum;
  
    beforeEach(() => {
      spiedSum = spy((a, b) => a + b);
      mock('../sum/sum', spiedSum);
      counter = mock.reRequire('./counter');
      counter.reset();
    });
  
    it('should return 2', done => {
      const promise = counter.next()
        .then(() => counter.next());
  
      promise.should.be.an.instanceof(Promise);
      promise.then(count => {
        count.should.be.equal(2);
        spiedSum.should.have.been.called.twice;
        done();
      });
    });
  
    it('should return 1', done => {
      const promise = counter.next();
  
      promise.should.be.an.instanceof(Promise);
      promise.then(count => {
        count.should.be.equal(1);
        spiedSum.should.have.been.called.once;
        done();
      });
    });
  });
  
