// Angular.
import { Injectable } from "@angular/core";
// Interface.
import { ExperienceEvent } from "../interface/experience-event.interface";

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  #experienceEvents: ExperienceEvent[] = [
    {
      status: 'Senior Angular Consultant',
      date: '2020 - Present',
      icon: 'pi pi-briefcase',
      color: '#22c55e',
      description: 'Leading Angular training programs and consulting for enterprise clients.'
    },
    {
      status: 'Angular Developer',
      date: '2018 - 2020',
      icon: 'pi pi-code',
      color: '#3b82f6',
      description: 'Developed scalable Angular applications for various industries.'
    },
    {
      status: 'Frontend Developer',
      date: '2016 - 2018',
      icon: 'pi pi-desktop',
      color: '#f59e0b',
      description: 'Built responsive web applications using modern frameworks.'
    }
  ];

  getExperiences() {
    return this.#experienceEvents
  }
}
