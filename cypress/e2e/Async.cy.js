/// <reference types="cypress" />

describe('Affichage des contenus suite aux requêtes asynchrones', () => {
    it('Effectue la connexion, puis va à la page de recherche et affiche les résultats de recherche', () => {
        // Visite la page de connexion
        cy.visit('/login');

        // Connecte l'utilisateur avec un nom d'utilisateur et un mot de passe valides
        cy.get('.login-input').eq(0).type('votreNomDutilisateur');
        cy.get('.login-input').eq(1).type('votreMotDePasse');
        cy.get('.login-button').click();

        // Attend que la navigation soit terminée et vérifie que l'utilisateur est redirigé vers la page de tendances
        cy.location('pathname').should('eq', '/series-trending');

        // Navigue vers la page de recherche
        cy.get('.navigation-links').contains('Recherche').click();
        cy.location('pathname').should('eq', '/recherche');

        // Effectue une recherche en entrant le texte "Ah" dans le champ de recherche
        cy.get('input[type="text"]').first().type('Ah');

        // Vérifie que les résultats de la recherche sont affichés
        cy.get('.liste-series').should('have.length.greaterThan', 0);

        // Clique sur le premier résultat de la recherche
        cy.get('.liste-series').first().click();

        

        // Navigue vers la page de tendances
        cy.get('.navigation-links').contains('Series Populaires').click();

        // Clique sur une série sur la page de tendances
        cy.get('.carte-serie').first().click();

        // Attend que la page des détails de la série soit chargée (ajustez ce délai en fonction de votre application)
        cy.wait(2000);

        // Clique sur le bouton "Ajouter aux favoris" dans les détails de la série
        cy.get('button').contains('Ajouter aux favoris').click();

        // Attend que l'action d'ajout aux favoris soit effectuée (ajustez ce délai en fonction de votre application)
        cy.wait(2000);

        // Va sur la page des favoris
        cy.get('.navigation-links').contains('Series Favorites').click();


        // Clique sur la première série dans la liste des favoris
        cy.get('.liste-series').should('be.visible').first().click();

        // Attend que la page des détails de la série soit chargée (ajustez ce délai en fonction de votre application)
        cy.wait(2000);

        // Clique sur le bouton "Enlever des favoris" dans les détails de la série
        cy.get('button').contains('Enlever des favoris').click();

        // Attend que l'action de suppression des favoris soit effectuée (ajustez ce délai en fonction de votre application)
        cy.wait(2000);

        // Actualise la page
        cy.reload();

        // Attend que la navigation soit terminée après le rechargement et vérifie que l'utilisateur est toujours sur la page des favoris
        cy.location('pathname').should('eq', '/recherche/170559');

        cy.reload();


    });
});
