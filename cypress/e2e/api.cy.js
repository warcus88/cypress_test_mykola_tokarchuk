
describe('template spec', () => {
  const amountOfTests = 100;
  const titleLenght = 45;

  for (let index = 1; index <= amountOfTests; index++) {
    it('passes', () => {
      cy.request(`/${index}`).then((resp) => {
        if (resp.body.title.length >= titleLenght) {
          expect('Title lenght is longer then 45').to.be(true)
        }
      })
    })
  }
})