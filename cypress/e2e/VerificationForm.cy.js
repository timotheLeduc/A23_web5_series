/// <reference types="cypress" />

describe('Vérification de la validation des formulaires', () => {
    it('Affiche une alerte lorsque le formulaire est soumis avec des champs vides', () => {
      // Visite la page de connexion
      cy.visit('/login');
  
      // Clique sur le bouton de connexion sans entrer de valeurs
      cy.get('.login-button').click();
  
      // Vérifie que l'alerte est affichée en cas de champs vides
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please enter both username and password.');
      });
    });
  
    it('Connecte l\'utilisateur avec des identifiants valides', () => {
      // Visite la page de connexion
      cy.visit('/login');
  
      // Saisit un nom d'utilisateur et un mot de passe valides
      cy.get('.login-input').eq(0).type('votreNomDutilisateur');
      cy.get('.login-input').eq(1).type('votreMotDePasse');
  
      // Clique sur le bouton de connexion
      cy.get('.login-button').click();
  
      // Vérifie que l'utilisateur est redirigé vers la page d'accueil après la connexion
      cy.location('pathname').should('eq', '/series-trending');
    });
  });
  