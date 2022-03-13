import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputService } from '../../input.service';

@Component({
  selector: 'app-input-total-section-display',
  templateUrl: './input-total-section-display.component.html',
  styleUrls: ['./input-total-section-display.component.scss']
})
export class InputTotalSectionDisplayComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    public readonly dataSerive: InputService,
    ) { }

  ngOnInit(): void {
    return;
  }

  getSectionIndex(): number{
    return parseInt(this.activateRoute.snapshot.paramMap.get('sectionIndex') || '0', // sectionIndex for
    );
  }

  getItems() {
    return this.dataSerive.getData()[this.getSectionIndex()]; // array of each this getSectionIndex() section and in this section is *input* value
  }

}
