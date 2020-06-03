import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  total = 0;
  target = 0;

  bills: string[] = [
    '500',
    '200',
    '100',
    '50',
    '20',
    '10',
    '5'
  ];

  coins: string[] = [
    '2',
    '1',
    '0.5',
    '0.2',
    '0.1',
    '0.05',
    '0.02',
    '0.01'
  ];

  currencies = [this.bills, this.coins];

  currencyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.currencyForm = fb.group([]);
  }

  ngOnInit(): void {
    this.currencies.forEach(
      currency => currency.forEach(
        unit => this.currencyForm.addControl(unit, this.fb.control(''))
      )
    );
  }

  calculate(): void {
    this.total = 0;
    Object.keys(this.currencyForm.controls).forEach(value => {
      this.total += +value * this.currencyForm.controls[value].value;
    });
  }

  setTarget(event): void {
    this.target = event.target.value;
  }
}
