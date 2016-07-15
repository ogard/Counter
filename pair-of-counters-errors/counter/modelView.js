import t from 'tcomb-validation';

const manjeOd5 = t.refinement(t.Number, (x) => x < 5 && x >= 0);

 t.Number.getValidationErrorMessage = (value, path) => {
     console.log(path);
 }

