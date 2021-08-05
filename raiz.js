//ejemplo raiz de 9 = 3

describe('Search test cases',function(){
    it('Search with results',function(){
         cy.visit('https://www.desmos.com/fourfunction');
         cy.get(':nth-child(1) > :nth-child(3) > .dcg-keypad-btn').click();
         cy.get(':nth-child(2) > :nth-child(3) > .dcg-keypad-btn').click(); 
         cy.get('.dcg-basic-expression-value > .dcg-mq-math-mode > .dcg-mq-root-block > .dcg-mq-digit').contains("3");
    })
})