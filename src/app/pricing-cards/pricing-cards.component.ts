import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss']
})
export class PricingCardsComponent implements OnInit {

  priceCards = [
    {
      title: 'Basic',
      price: '50',
      description: [
        'Standard room', 'Breakfast included', 'Room service included'
      ]
    },
    {
      title: 'Standard',
      price: '100',
      description: [
        'Deluxe room', 'Breakfast with Dinner', '24/7 wifi access'
      ]
    },
    {
      title: 'Advanced',
      price: '200',
      description: [
        'Executive suite', 'Free Gym and swimming pool', 'Access to Spa and Bar'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
