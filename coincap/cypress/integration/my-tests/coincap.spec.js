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
        for (let i = 0; i < arr.length; i++) {// here we check the names of our thead
          cy.get(`thead tr th:nth-child(${(i + 1)})`)
            .should(
              'have.text',
              `${arr[i]}`
            );
        }

        cy.get('tbody tr')
          .should('be.visible')
          .should('have.length', 20); //check the length of our coins per page
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

  it('check the add button of a concrete coin', () => {
    let numberOfCoins = '1'; // taken as an example of input

    cy.get('.crypto-add')
      .eq(0)
      .click(); // buy first coin of the list

    cy.get('.modal modal-active')
      .should('be.visible');

    cy.get('.modal-header')
      .should(
        'have.text',
        'Buy Coins'
      );

    cy.get('.modal-body__titles')
      .children()
      .should('have.length', 3);

    const arr = ['Name', 'Amount', 'Total Sum']
    for (let i = 0; i < arr.length; i++) {// here we check the titles of our modal body
      cy.get(`.modal-body__titles`)
        .children(i)
        .should(
          'have.text',
          `${arr[i]}`
        );
    }

    cy.get('.modal-body__item-amount')
      .type(numberOfCoins);

    cy.get('.modal-footer__btn')
      .click();
  })


  it('check the wallet activation', () => {

  })

  it('check the deletion of wallet items', () => {

  })

  it('close wallet', () => {

  })

});