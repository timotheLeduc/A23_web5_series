describe('Authentification persistante et navigation', () => {
    it('Simule l\'authentification persistante, se connecte et navigue', () => {
      // Visite la page de connexion
      cy.visit('/login');
  
      // Clique sur le bouton de connexion sans entrer de valeurs
      cy.get('.login-button').click();
  
      // Vérifie que l'utilisateur est toujours sur la page de connexion
      cy.location('pathname').should('eq', '/login');
  
      // Connecte l'utilisateur avec un nom d'utilisateur et un mot de passe valides
      cy.get('.login-input').eq(0).type('votreNomDutilisateur');
      cy.get('.login-input').eq(1).type('votreMotDePasse');
      cy.get('.login-button').click();
  
      // Attends que la navigation soit terminée et vérifie que l'utilisateur est redirigé vers la page de tendances
      cy.location('pathname').should('eq', '/series-trending');
  
      // Actualise la page
      cy.reload();
  
      // Attends que la navigation soit terminée après le rechargement et vérifie que l'utilisateur est toujours sur la page de tendances
      cy.location('pathname').should('eq', '/series-trending');
  
      // Clique sur le lien de déconnexion
      cy.contains('Déconnexion').click();
  
      // Vérifie que l'utilisateur est redirigé vers la page de connexion après la déconnexion
      cy.location('pathname').should('eq', '/login');
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test on uncaught exceptions
        return false;
      });
      
  });
  