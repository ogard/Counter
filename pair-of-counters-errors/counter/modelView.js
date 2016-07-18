import t from 'tcomb';

t.Number.getValidationErrorMessage = (value, path) => {
    if (value == '') {
        return 'Morate uneti podatak u polje';
    }
    else {
        return 'Morate uneti broj!';
    }
}

const ogranicenjePolja = t.refinement(t.Number, (x) => {return (x >= 0 && x <= 5);});
ogranicenjePolja.getValidationErrorMessage = (value, path) => {
    if (value < 0) {
        return 'Morate uneti vrednost vecu od 0 za polje ' + path;
    }
    if (value > 5) {
        return 'Morate uneti vrednost manju od 6 za polje ' + path;
    }
}

const Struktura = t.struct({
    count: t.Number,
    increment: ogranicenjePolja,
    decrement: ogranicenjePolja
});

const ogranicenjeStrukture = t.refinement(Struktura, (forma) => {return (forma.increment <= forma.decrement);});
ogranicenjeStrukture.getValidationErrorMessage = (value, path) => {
    return 'Inkrementor mora biti manji od dekrementora';
}

export default ogranicenjeStrukture;