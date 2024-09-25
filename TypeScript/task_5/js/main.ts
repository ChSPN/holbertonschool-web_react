// Définir l'interface MajorCredits
interface MajorCredits {
    credits: number;
    brand: 'Major';
}

// Définir l'interface MinorCredits
interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

// Fonction pour additionner les crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major'
    };
}

// Fonction pour additionner les crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor'
    };
}

// Exemple d'utilisation des fonctions
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };
const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 1, brand: 'Minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'Major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, brand: 'Minor' }
