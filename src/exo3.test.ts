import { Bibliotheque, Livre } from './exo3';

describe('Livre', () => {
    it('should create a new Livre instance', () => {
        const livre = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, true);
        console.log('Livre instance:', livre);
        expect(livre).toBeDefined();
    });

    it('should emprunter a Livre', () => {
        const livre = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, false);
        console.log('Before emprunter:', livre);
        livre.emprunter();
        console.log('After emprunter:', livre);
        expect(livre.estEmprunte).toBe(true);
    });

    it('should retourner a Livre', () => {
        const livre = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, true);
        console.log('Before retourner:', livre);
        livre.retourner();
        console.log('After retourner:', livre);
        expect(livre.estEmprunte).toBe(false);
    });
});

describe('Bibliotheque', () => {
    it('should create a new Bibliotheque instance', () => {
        const bibliotheque = new Bibliotheque([]);
        console.log('Bibliotheque instance:', bibliotheque);
        expect(bibliotheque).toBeDefined();
    });

    it('should add a Livre to Bibliotheque', () => {
        const bibliotheque = new Bibliotheque([]);
        const livre = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, false);
        console.log('Before ajouterLivre:', bibliotheque.livres);
        bibliotheque.ajouterLivre(livre);
        console.log('After ajouterLivre:', bibliotheque.livres);
        expect(bibliotheque.livres).toContainEqual(livre);
    });

    it('should search for a Livre by title', () => {
        const bibliotheque = new Bibliotheque([]);
        const livre1 = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, false);
        const livre2 = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 2", 192, false);
        bibliotheque.livres = [livre1, livre2];
        console.log('Before chercherParTitre:', bibliotheque.livres);
        const result = bibliotheque.chercherParTitre("Demon Slayer");
        console.log('After chercherParTitre:', result);
        expect(result).toContainEqual(livre1);
        expect(result).toContainEqual(livre2);
    });

    it('should emprunter a Livre by ISBN', () => {
        const bibliotheque = new Bibliotheque([]);
        const livre = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, false);
        bibliotheque.ajouterLivre(livre);
        console.log('Before emprunterLivre:', bibliotheque.livres);
        bibliotheque.emprunterLivre("Tome 1");
        console.log('After emprunterLivre:', bibliotheque.livres);
        expect(livre.estEmprunte).toBe(true);
    });

    it('should retourner a Livre by ISBN', () => {
        const bibliotheque = new Bibliotheque([]);
        const livre = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1", 192, true);
        bibliotheque.ajouterLivre(livre);
        console.log('Before retournerLivre:', bibliotheque.livres);
        bibliotheque.retournerLivre("Tome 1");
        console.log('After retournerLivre:', bibliotheque.livres);
        expect(livre.estEmprunte).toBe(false);
    });
});
