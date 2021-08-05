// division de 8/4= 2
describe('Search test cases',function(){
    it('Search with results',function(){
         cy.visit('https://www.desmos.com/fourfunction');
         cy.get(':nth-child(2) > :nth-child(2) > .dcg-keypad-btn').click();
         cy.get(':nth-child(1) > :nth-child(4) > .dcg-keypad-btn').click();
         cy.get(':nth-child(3) > :nth-child(1) > .dcg-keypad-btn').click(); 
         cy.get('.dcg-basic-expression-value > .dcg-mq-math-mode').contains("2");
    })
})