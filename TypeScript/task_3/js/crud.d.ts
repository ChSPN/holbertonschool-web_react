// Importer RowID et RowElement depuis interface.ts
import { RowID, RowElement } from './interface';

// Déclarer les types des fonctions CRUD
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
