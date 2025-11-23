import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  #education = [
    {
      institution: 'University of Example',
      degree: 'Bachelor of Science in Computer Science',
      year: '2015 - 2019',
      location: 'Berlin, Germany',
      details: 'Graduated with honors, specialized in software development and algorithms.',
    },
    {
      institution: 'Example Tech Bootcamp',
      degree: 'Full Stack Web Development',
      year: '2020',
      location: 'Warsaw, Poland',
      details: 'Intensive 12-week program covering modern web technologies and frameworks.',
    },
    {
      institution: 'Example Tech Bootcamp',
      degree: 'Full Stack Web Development',
      year: '2020',
      location: 'Warsaw, Poland',
      details: 'Intensive 12-week program covering modern web technologies and frameworks.',
    },
    {
      institution: 'Example Tech Bootcamp',
      degree: 'Full Stack Web Development',
      year: '2020',
      location: 'Warsaw, Poland',
      details: 'Intensive 12-week program covering modern web technologies and frameworks.',
    }
  ];
  getEducation() {
    return this.#education;
  }
}
