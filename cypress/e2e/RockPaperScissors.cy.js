describe('Verify game UI is working', () => {
  it('Enters name, chooses rock', () => {
    cy.visit('http://127.0.0.1:5500');

    // put name in name form
    const username = "TestName";
    cy.get("#username").type(username);
    cy.get("#username").should("have.value", username);
    cy.get("#start-game-button").click();

    // Make sure welcome screen is hidden
    cy.get("#welcome-screen").should("be.hidden");
    // Make sure game screen is shown
    cy.get("#game-screen").should("be.visible");

    // go through RockPaperScissors options
    const options = [ "rock", "paper", "scissors" ];

    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      // Select option from dropdown
      cy.get("#user-selection").select(option);
      cy.get("#user-selection").should("have.value", option);
      cy.get("#go-button").click();

      // check if history has the right number of trials
      cy.get("#game-history").should(gameHistory => {
        // Check if game history contains username
        expect(gameHistory).to.contain(username);
        // Check if game history has logged all tries
        const numberOfTries = gameHistory.text().split(",").length;
        expect(numberOfTries).to.equal(i + 1);
      });
    }
  })
})