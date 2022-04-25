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
      });

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
        };

        cy.get('tbody tr')
          .should('be.visible')
          .should('have.length', 20); //check the length of our coins per page
      });

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
      });
  })

  it('opens modal window of the table', () => {
    cy.get('.crypto-add')
      .should('be.visible')
      .eq(0)
      .click();// buy first coin of the list
  });


  it('checks components of the modal window', () => {
    cy.get('.modal.modal-active')
      .should('be.visible')
      .within(() => {

        cy.get('.modal-header')
          .should(
            'have.text',
            'Buy Coins×'
          );

        cy.get('.modal-body__titles')
          .children()
          .should('have.length', 3);

        const arr = ['Name', 'Amount', 'Total Sum'];
        for (let i = 0; i < arr.length; i++) {// here we check the titles of our modal body
          cy.get(`.modal-body__titles`)
            .children().eq(i)
            .should(
              'contain.text',
              `${arr[i]}`
            );
        };
      });
  });

  it('buys coin from the table', () => {
    let numberOfCoins = '1'; // taken as an example of input

    cy.get('.modal-body__item-amount')
      .type(numberOfCoins)
      .should('have.value', numberOfCoins);

    cy.get('.modal-footer__btn')
      .click()
      .then(() => {
        cy.get('.modal-body__item')
          .should('have.length', 1)
      });

    cy.wait(5000);

    cy.get('.user-wallet-info')
      .should('be.visible')
      .click();

    cy.get('.modal.modal-active').eq(0)
      .should('be.visible')
      .within(() => {

        cy.get('.modal-content')
          .should('be.visible')

        cy.get('.modal-header')
          .should(
            'have.text',
            'My Coins×'
          );

        cy.get('.modal-body__titles-wallet')
          .children()
          .should('have.length', 3);

        cy.get('.modal-body__items') // check the length of bought coins
          .children()
          .should('have.length', 1)

        cy.get('.crypto-minus')
          .click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })

        cy
          .get('.modal-body__items')
          .then(elem => {
            elem[0].removeAttribute('.modal-body__item');
          })
      });
  });

  it('close wallet', () => {
    cy.get('.modal-header').eq(0)
      .should('be.visible')
      .click()
      .within(() => {

        cy.get('.close').eq(0)
          .click();
      });
  });

  it('opens details', () => {
    cy.get('tbody tr').eq(0)
      .should('be.visible')
      .click()
  });

  it('loads details page', () => {
    cy.get('.crypto-details__container')
      .should('be.visible')
      .within(() => {
        cy.get('.crypto-details__left')
          .should('be.visible')
          .children()
          .should('have.length', 2);

        const dayjs = require('dayjs')
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
        let dateFormat = dayjs().format(`MMM DD YYYY`)
        let res = weekday + "" + dateFormat

        const arr = ['Bitcoin (BTC)', res];
        for (let i = 0; i < arr.length; i++) {
          cy.get(`.crypto-details__left`)
            .children().eq(i)
            .should(
              'contain.text',
              `${arr[i]}`
            );
        };

        cy.get('.crypto-details__middle')
          .should('be.visible')
          .children()
          .should('have.length', 2);

        const arr1 = ['Change', 'Price'];
        for (let i = 0; i < arr1.length; i++) {
          cy.get(`.crypto-details__middle`)
            .children().eq(i)
            .should(
              'contain.text',
              `${arr[i]}`
            );
        };

      })

    cy.get('.crypto-details__right')
      .should('be.visible');

    cy.get('.crypto-details__graphic')
      .should('be.visible');
  });

  it('opens open buy-coin modal window', () => {
    cy.get('.crypto-details__right')
      .click()
  });

  it('closes buy-coin modal window', () => {
    cy.get('.modal-content')
      .within(() => {
        cy.get('.modal-header')
          .find('.close')
          .click()
      })
  });

})
