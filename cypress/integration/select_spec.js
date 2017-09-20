describe('Select', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should select all options', () => {
    cy.get('ul li:first').click()

    cy.get('ul li:first').should('contain', 'SELECTED')
    cy.get('ul li:last').should('contain', 'SELECTED')
  })

  it('should deselect all options', () => {
    cy.get('ul li:first').click()
    cy.get('ul li:first').click()

    cy.get('ul li:first').should('not.contain', 'SELECTED')
    cy.get('ul li:last').should('not.contain', 'SELECTED')
  })
})
