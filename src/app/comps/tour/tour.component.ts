import { Component } from '@angular/core';
import Shepherd from 'shepherd.js';
import { defaultSetting, tourSteps } from './tourSetup';
import { NavigationEnd, Router } from '@angular/router';
import { remove, groupBy, omit, isEmpty } from 'lodash';
import { shepherd } from './types';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourComponent {


  currentTour: { [key: string]: shepherd[] } = {}
  routeTours = []

  constructor(private router: Router) {

  }
  ngAfterViewInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const url = e.url.split("?")[0]
        if (tourSteps.length) {
          const _currTour: shepherd[] = remove(tourSteps, e => e.route === url)
          const groups = groupBy(_currTour, e => e.tour) as any
          this.startTour(groups as any)
        }
      }
    })
  }


  startTour(groups: { [key: string]: shepherd[] }) {

    const first_key = Object.keys(groups)[0]
    let steps = groups[first_key]
    if (!steps?.length) return
    const tour = new Shepherd.Tour(defaultSetting);
    groups = omit(groups, [first_key])
    const tour_len = steps.length - 1
    
    for (let i = 0; i <= tour_len; i++) {
      if (i == 0) steps[i].buttons = [{ text: "Next", action: tour.next }]
      else if (i == tour_len) steps[i].buttons = [{ text: "Back", action: tour.back }, { text: "Done", action: tour.next }]
      else steps[i].buttons = [{ text: "Back", action: tour.back }, { text: "Next", action: tour.next }]
    }

    tour.addSteps(steps);
    tour.start()
    tour.on("complete", () => this.startTour(groups))
    tour.on("cancel", () => this.startTour(groups))
    window.scrollTo({
      top: 1
    })
  }
}
