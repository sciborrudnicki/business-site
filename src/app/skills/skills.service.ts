// Angular.
import { Injectable } from '@angular/core';
// Interface.
import { Skill } from '../interface/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  getSkills(): Skill[] {
    return [
      { name: 'Angular', description: 'A platform for building mobile and desktop web applications', value: 95, icon: 'pi pi-google' },
      { name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript', value: 90, icon: 'pi pi-bolt' },
      { name: 'RxJS', description: 'A library for reactive programming using Observables', value: 85, icon: 'pi pi-refresh' },
      { name: 'HTML/CSS', description: 'The standard markup language and style sheet language for creating web pages', value: 90, icon: 'pi pi-code' },
      { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine', value: 80, icon: 'pi pi-server' },
      { name: 'Testing (Jasmine/Karma)', description: 'Tools for testing JavaScript code', value: 85, icon: 'pi pi-check-circle' }
    ];
  }
}
