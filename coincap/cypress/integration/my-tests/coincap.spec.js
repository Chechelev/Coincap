describe('The CoinCap main page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')

    cy.get('.header')
      .should('be.visible')
      .within(() => {

        cy.get('.logo')
          .find('img')
          .should('have.attr', 'src', '/static/media/logo.c7be6b4702fe054d8f3ab1720e2ef43c.svg');

        cy.get('.top-coins')
          .should('be.visible')
          .find('.top-coins__item')
          .should('have.length', 3);

        cy.get('.user-wallet-info')
          .should('be.visible')
          .children()
          .should('have.length', 4);
      })

    cy.get('table')
      .should('be.visible')
      .within(() => {

        cy.get('thead tr')
          .children()
          .should('have.length', 9);

        const arr = ['Rank', 'Name', 'Price', 'Marcet Cap', 'VWAP (24Hr)', 'Supply', 'Volume (24Hr)', 'Change (24Hr)']
        for (let i = 0; i < arr.length; i++) {

          cy.get(`thead tr th:nth-child(${(i + 1)})`)
            .should(
              'have.text',
              `${arr[i]}`
            );
        }


        cy.get('tbody tr')
          .should('be.visible')
          .should('have.length', 20);
      })

    cy.get('.pagination')
      .should('be.visible')
      .find('.page-item')
      .should('have.length', 5);


    cy.get('.footer')
      .should('be.visible')
      .within(() => {

        cy.get('.creator-block__name')
          .should('be.visible')
          .should(
            'have.text',
            'Pavel Chechelev'
          );

        cy.get('.creator-block__github')
          .should('be.visible')
          .find('.github-link')
          .should(
            'have.text',
            'GitHub'
          );
      })
  })


  // Form
  /*
  cy.get('h2').should('contain.text', 'Enter Your Choices!')
  cy.get('table').should('be.visible')
  cy.get('tr').should('have.length', 10)
  cy.get('button')
    .should('contain.text', 'Complete')
    .should('be.disabled')
*/
});