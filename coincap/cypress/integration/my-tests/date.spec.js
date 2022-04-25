describe('The CoinCap main page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')
    const dayjs = require('dayjs')
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
    cy.log(weekday)
    //In test
    let date = dayjs().format(` MMM DD YYYY`)  //Prints todays date 30/0
    cy.log(weekday + " " + date)
  })
  //Prints todays date 30/09/2021
})