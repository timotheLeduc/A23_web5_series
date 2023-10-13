describe('Trending Series Page', () => {
    beforeEach(() => {
        // Intercepter la requête API trending et répondre avec les données de la fixture
        cy.intercept('GET', 'http://localhost:3000/api/series/trending', { fixture: 'trending.json' }).as('trendingRequest');

        // Intercepter la requête API de recherche et répondre avec les données de la fixture
        cy.intercept('GET', 'http://localhost:3000/api/series/search?q=A', { fixture: 'trending.json' }).as('searchRequest');

        // Visiter la page de connexion
        cy.visit('/login');

        // Remplir les champs de connexion et cliquer sur le bouton de connexion
        cy.get('.login-input').eq(0).type('votreNomDutilisateur');
        cy.get('.login-input').eq(1).type('votreMotDePasse');
        cy.get('.login-button').click();

        // Attendre que la navigation soit terminée et vérifier la redirection vers la page des séries tendances
        cy.location('pathname').should('eq', '/series-trending');

        // Attendre que la requête API trending soit interceptée et terminée
        cy.wait('@trendingRequest');
    });

    it('clique sur la première carte de série et vérifie les détails', () => {
        // Cliquer sur la première carte de série tendance
        cy.get('.carte-serie').first().click();
    
        // Attendre que la navigation soit terminée et vérifier la redirection vers la page de détails de la série
        cy.location('pathname').should('match', /\/series-trending\/\d+/); // Utiliser une expression régulière pour les IDs dynamiques comme '/series-trending/170559'
    
        // Vérifier que les détails de la série sont affichés correctement
        // Assurez-vous d'utiliser la balise réelle pour le titre de la série
        cy.get('h1').should('contain.text', 'Ahsoka');
        // Vous pouvez également utiliser une classe ou un autre sélecteur plus spécifique si nécessaire
    
        // Ajouter d'autres assertions au besoin en fonction de la fonctionnalité de votre application
    });

    it('effectue une recherche et vérifie les résultats', () => {
        // Saisir "A" dans la barre de recherche
        cy.get('input[type="text"]').type('A');




        // Attendre que la requête API de recherche soit interceptée et terminée
        cy.wait('@searchRequest');

        // Vérifier que les résultats de recherche sont affichés correctement
        // Par exemple, vous pouvez vérifier la présence d'un élément spécifique dans les résultats de recherche
        cy.get('h3').should('contain.text', 'Ahsoka');

        // Ajouter d'autres assertions au besoin en fonction de la fonctionnalité de votre application
    });
});
