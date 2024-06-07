/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach(() => {
        cy.visit('./src/index.html')            
      })
          
    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Antonio')
        cy.get('#lastName').type('Ramos')
        cy.get('#email').type('antonio@antonio.com')
        cy.get('#open-text-area').type('Estou aprendendo!', {delay:100})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')        
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Antonio')
        cy.get('#lastName').type('Ramos')
        cy.get('#email').type('antonio.antonio.com')
        cy.get('#open-text-area').type('Estou aprendendo!', {delay:100})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')        
    })

    it('campo "telefone" se mantém vazio se valores não-numéricos forem digitados', function() {
        cy.get('#phone').type('abc')
        cy.get('#phone').should('be.empty')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Antonio')
        cy.get('#lastName').type('Ramos')
        cy.get('#email').type('antonio@antonio.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Estou aprendendo!', {delay:100})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')        
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('seleciona um produto (Youtube) por seu texto', function() {
        cy.get('select').select('YouTube').should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu texto', function() {
        cy.get('select').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu texto', function() {
        cy.get('select').select(1).should('have.value', 'blog')
    })

    it('seleciona um produto (Blog) por seu texto', function() {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"').each(($radio) => {     
            cy.wrap($radio).check().should('be.checked')
        })
    })

    it.only('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check().should('be.checked')
        })
        .last().uncheck().should('not.be.checked')
    })
})
  