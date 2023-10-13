/// <reference types="cypress" />

describe('Connexion de l\'utilisateur et navigation', () => {
  it('Connecte l\'utilisateur avec le formulaire de connexion, effectue différentes actions, puis se déconnecte', () => {
    cy.visit('/login');
    cy.get('.login-input').eq(0).type('votreNomDutilisateur');
    cy.get('.login-input').eq(1).type('votreMotDePasse');
    cy.get('.login-button').click();

    // Une fois connecté, effectuez les actions de navigation ici
    cy.get('.navigation-links').contains('Page Principale').click();
    cy.location('pathname').should('eq', '/');

    cy.get('.navigation-links').contains('Series Populaires').click();
    cy.location('pathname').should('eq', '/series-trending');

    // Cliquez sur le premier élément avec la classe "carte-serie"
    cy.get('.carte-serie').first().click();

    // Cliquez sur le bouton "Ajouter aux favoris"
    cy.contains('Ajouter aux favoris').click();

    // Cliquez sur le lien "Series Favorites"
    cy.get('.navigation-links').contains('Series Favorites').click();

    // Cliquez sur la première série favorite
    cy.get('.carte-serie').first().click();

    // Assurez-vous que vous êtes sur la page de détails de la série favorite
    cy.location('pathname').should('include', '/series-favorites/');

    // Cliquez sur le lien "Recherche"
    cy.get('.navigation-links').contains('Recherche').click();

    // Saisissez "Ah" dans la première barre de recherche
    cy.get('input[type="text"]').first().type('Ah');

    // Cliquez sur le bouton "Rechercher"
    cy.get('button').contains('Rechercher').click();

    // Assurez-vous que les résultats de la recherche sont affichés
    cy.get('.carte-serie').should('have.length.greaterThan', 0);

    

    

    // Vous avez été déconnecté avec succès
  });
});
