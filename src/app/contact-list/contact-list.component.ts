// https://medium.com/@sevriukovmk/angular-mat-table-filter-2ead680c57bb
// https://blog.angular-university.io/angular-material-data-table/
// https://github.com/angular/components/issues/9321#issuecomment-401370261

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Voyage } from '../shared/entities.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  public displayedColumns: string[] =
    ['contactDate', 'kontaktart', 'kanal', 'kategorie', 'thema', 'terminzustellung', 'user', 'status', 'aktion'];

  public dataSource: MatTableDataSource<Voyage>;
  public searchForm: FormGroup;

  public contactDate = '';
  public thema = '';

  public kontaktart = '';
  public kontaktarten = ['Kunde direkt', 'Schriftverkehr', 'Kampagne', 'BASE-Mitteilung', 'Elektr. Nachricht'];

  public kanal = '';
  public kanaele = ['Persönlich', 'Inbound/Outbound Call', 'Call Center', 'Online-Banking'];

  public kategorie = '';
  public kategorien = ['Kredit', 'Geldanlage', 'Vorsorge', 'Kooperationspartner', 'Zahlungsverkehr', 'Reklamationen',
    'Verträge', 'Sonderkonditionen', 'Termine', 'Dokumente', 'Mahnwesen'];

  public status = '';
  public statusWerte = ['Aktiv'];

  public allFilters = {};

  ngOnInit() {
    this.dataSource = new MatTableDataSource(CONTACTS);
    this.searchFormInit();
    /* Filter predicate used for filtering table per different columns
    *  */
    this.dataSource.filterPredicate = this.getFilterPredicate();
  }

  searchFormInit() {
    this.searchForm = new FormGroup({
      formControlThema: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      formControlUser: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      formControlContactDate: new FormControl(''),
      formControlKontaktart: new FormControl(),
      formControlKanal: new FormControl(),
      formControlKategorie: new FormControl(),
      formControlStatus: new FormControl(),
      formControlStartDate: new FormControl(moment([2020, 0, 1])),
      formControlEndDate: new FormControl(moment([2021, 11, 31]))
    });
  }

  /* this method well be called for each row in table  */
  getFilterPredicate() {
    return (row: Voyage, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      console.log({ filterArray });

      // const matchFilter = [];

      // Fetch data from row

      // return true if all values in array is true
      // else return false
      return true; // matchFilter.every(Boolean);
    };
  }



  applyNewFilter(column: string, value) {
    this.allFilters[column] = value;
    console.log('allFilters', this.allFilters);
  }

  applyNewSelectionList(column: string, data: any) {
    this.allFilters[column] = data.value;
    console.log('allFilters', this.allFilters);
  }

  dateChanged(column: string, data: any) {
    this.allFilters[column] = data;
    console.log('allFilters', this.allFilters);
  }

  applyFilter() {
    const date = this.searchForm.get('contactDate').value;
    this.contactDate = (date === null || date === '') ? '' : date.toDateString();

    // create string of our searching values and split if by '$'
    const filterValue = this.contactDate + '$';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


const CONTACTS: any[] = [
  { id: 1, contactDate: new Date('2020-01-16') },
  { id: 2, contactDate: new Date('2020-01-16') },
  { id: 3, contactDate: new Date('2020-01-17') },
  { id: 4, contactDate: new Date('2020-01-17') },
  { id: 5, contactDate: new Date('2020-01-19') },
  { id: 6, contactDate: new Date('2020-01-19') },
  { id: 7, contactDate: new Date('2020-01-20') },
  { id: 8, contactDate: new Date('2020-01-20') },
  { id: 9, contactDate: new Date('2020-01-22') },
  { id: 11, contactDate: new Date('2020-01-22') },
  { id: 12, contactDate: new Date('2020-01-24') },
  { id: 13, contactDate: new Date('2020-01-24') },
  { id: 14, contactDate: new Date('2020-01-26') },
  { id: 15, contactDate: new Date('2020-01-26') },
  { id: 16, contactDate: new Date('2020-01-28') },
  { id: 17, contactDate: new Date('2020-01-28') },
  { id: 18, contactDate: new Date('2020-01-27') },
  { id: 19, contactDate: new Date('2020-01-27') },
  { id: 20, contactDate: new Date('2020-01-23') },
  { id: 21, contactDate: new Date('2020-01-23') },
];
