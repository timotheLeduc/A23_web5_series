
describe('User Authentication and Navigation', () => {
    it('Logs in, checks username, navigates, logs out', () => {
      // Visit the login page
      cy.visit('/');
      
      // Enter username and password
      cy.get('input[placeholder="Username"]').type('your-username');
      cy.get('input[placeholder="Password"]').type('your-password');
      
      // Click the login button
      cy.contains('Login').click();
  
      // Check if the username is displayed
      cy.contains('h2', 'Your Username').should('be.visible');
  
      // Navigate to Trending page
      cy.contains('Trending').click();
  
      // Add a series to favorites
      cy.get('.series-item').first().find('.add-to-favorites').click();
  
      // Navigate to Favorites page
      cy.contains('Favorites').click();
  
      // Check if the series is in favorites
      cy.get('.series-item').first().should('be.visible');
  
      // Log out
      cy.contains('Logout').click();
      
      // Check if the username is now 'Guest'
      cy.contains('h2', 'Guest').should('be.visible');
    });
  });
  