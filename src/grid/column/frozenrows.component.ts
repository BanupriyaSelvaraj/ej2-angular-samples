import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from '../data';
import { FreezeService, ResizeService, GridComponent, SortService } from '@syncfusion/ej2-ng-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-ng-inputs';
import { Browser } from '@syncfusion/ej2-base';

@Component({
    selector: 'ej2-grid-frozen',
    templateUrl: 'frozenrows.html',
    providers: [FreezeService, ResizeService, SortService]
})
export class FrozenRowsComponent implements OnInit {
    @ViewChild('grid')
    public grid: GridComponent;
    @ViewChild('rows')
    public rows: NumericTextBoxComponent;
    @ViewChild('columns')
    public columns: NumericTextBoxComponent;
    public data: Object[] = [];
    columnValue: number = Browser.isDevice ? 1 : 2;
    //After clicking 'Set' button, the `frozenRows` and `frozenColumns` values will be updated in Grid.
    btnClick() {
        this.grid.frozenRows = this.rows.value;
        this.grid.frozenColumns = this.columns.value;
    }

    ngOnInit(): void {
        this.data = data.slice(0, 50);
    }
}