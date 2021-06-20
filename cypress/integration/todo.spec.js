describe('Todo mvc', () => {
    beforeEach('Logando no site',() => {
        cy.visit('https://todomvc.com/examples/typescript-react/#/')
    });
    it('Cadastrar itens na lista', () => {
        cy.get('ul.todo-list').should('have.length', 0)
        cy.get('header input').type('Limpar casa {enter}')
        cy.get('ul.todo-list').should('have.length', 1)
    });
    it('Excluir itens na lista', () => {
        cy.get('ul.todo-list').should('not.exist')
        cy.get('header input').type('Limpar casa {enter}')
        cy.get('button.destroy').invoke('show').click()
        cy.get('ul.todo-list').should('not.exist')
    });
    it('Marcar um item como completo', () => {
        cy.get('ul.todo-list').should('not.exist')
        cy.get('header input').type('Limpar casa {enter}')
        cy.get('ul.todo-list').should('have.length', 1)
        cy.get('input.toggle').click()
        cy.get('strong').should('contain',0)
        cy.get('button.clear-completed').should('contain', 'Clear completed')
    });
    it('Selecionar o filtro active', () => {
        cy.get('ul.todo-list').should('not.exist')
        cy.get('header input').type('Limpar casa {enter}')
        cy.get('ul.todo-list').should('have.length', 1)
        cy.get('.filters').contains('Active').click()
        cy.get('input.toggle').click()
        cy.get('ul.todo-list').children().should('have.length', 0)
    });
    it('Selecionar o filtro completed', () => {
        cy.get('ul.todo-list').should('not.exist')
        cy.get('header input').type('Limpar casa {enter}')
        cy.get('ul.todo-list').should('have.length', 1)
        cy.get('input.toggle').click()
        cy.get('.filters').contains('Completed').click()
        cy.get('ul.todo-list').children().should('have.length', 1)
    });
    it('Selecionar clear completed com filtro all ativo', () => {
        cy.get('ul.todo-list').should('not.exist')
        cy.get('header input').type('Limpar casa {enter}')
        cy.get('ul.todo-list').should('have.length', 1)
        cy.get('input.toggle').click()
        cy.get('button.clear-completed').click()
        cy.get('ul.todo-list').should('not.exist')
    });
});