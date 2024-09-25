/// <reference path="./crud.d.ts" />

// Importer RowID et RowElement depuis interface.ts
import { RowID, RowElement } from './interface';

// Importer tout depuis crud.js en tant que CRUD
import * as CRUD from './crud';

// Créer un objet row avec le type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insérer une nouvelle ligne et obtenir l'ID de la nouvelle ligne
const newRowID: RowID = CRUD.insertRow(row);

// Créer un objet updatedRow avec le type RowElement et mettre à jour l'âge
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};

// Mettre à jour la ligne avec l'ID newRowID
CRUD.updateRow(newRowID, updatedRow);

// Supprimer la ligne avec l'ID newRowID
CRUD.deleteRow(newRowID);
