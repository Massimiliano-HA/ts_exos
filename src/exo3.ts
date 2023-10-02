export class Livre {
    titre: string ;
    auteur: string ;
    ISBN: string ;
    nombreDePages: number ;
    estEmprunte: boolean ;

    constructor(titre : string, auteur : string, ISBN: string, nombreDePages : number, estEmprunte : boolean) {
        this.titre = titre;
        this.auteur = auteur;
        this.ISBN = ISBN;
        this.nombreDePages = nombreDePages;
        this.estEmprunte = estEmprunte;
    }

    emprunter() {
        this.estEmprunte = true;
    }

    retourner() {
        this.estEmprunte = false;
    }
}

export class Bibliotheque {
    livres : Livre[];

    constructor(livres : Livre[]) {
        this.livres = livres;
    }

    ajouterLivre(livre: Livre) {
        this.livres.push(livre);
    }

    chercherParTitre(titre: string) {
        this.livres.filter(t => t.titre === titre);
    }

    emprunterLivre(ISBN: string) {
        this.livres.filter(livre => ISBN === ISBN).forEach(livre => livre.emprunter());
    }

    retournerLivre(ISBN: string) {
        this.livres.filter(livre => ISBN === ISBN).forEach(livre => livre.retourner());
    }
}

const demonSlayerT1 = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 1",192, true);
const demonSlayerT2 = new Livre("Demon Slayer", "Koyoharu Gotōge", "Tome 2",192, false);
const LartDuCommerce = new Livre("LartDuCommerce", "Florian Cohen Joly", "Tome 1",192, false);
const LeLivreDeLaJungle = new Livre("LeLivreDeLaJungle", "Alan Kouakou", "Tome 1",192, false);
const bibliotheque = new Bibliotheque([demonSlayerT1, LartDuCommerce]);

bibliotheque.ajouterLivre(demonSlayerT2);
console.log(bibliotheque);