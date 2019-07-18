const expect = require('chai').expect

const helloWorldTest = 'Hello World'
describe('Hello World', function() {
  it('prints the correct string', function(done) {
    const helloWorld = require('../hello-world')()
    expect(helloWorld).to.equal(helloWorldTest)
    done()
  })
})


















































// describe('hello-world method in hello-world.js', function () {
//   it('must match Hello World', function(done){
//     var helloWorld = require('../hello-world')()
//     helloWorld = helloWorld.replace('\n', '')
//     expect(helloWorld).to.equal('Hello World')
//     done()
//   })
// })