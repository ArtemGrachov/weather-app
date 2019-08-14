import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-form',
    templateUrl: 'search-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
    @Output()
    public onSubmit: EventEmitter<string> = new EventEmitter();

    public searchForm: FormGroup = new FormGroup({
        query: new FormControl('')
    })

    public submit(): void {
        this.onSubmit.emit(this.searchForm.get('query').value);
    }
}
