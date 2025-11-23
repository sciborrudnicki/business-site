import { Injectable } from "@angular/core";
// Interface
import { Transformation } from "../interface/transformation.interface";

@Injectable({
  providedIn: 'root'
})
export class TransformationsService {

  public get transformations(): Transformation[] {
    return this.#transformations;
  }

#transformations: Transformation[] = [
    {
      photo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'John Doe',
      title: 'Junior Developer',
      tags: ['Angular', 'Beginner', 'Certified'],
      skills: [
        { name: 'Angular Proficiency', before: 30, after: 85 },
        { name: 'Component Design', before: 20, after: 90 },
        { name: 'State Management', before: 10, after: 75 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Jane Smith',
      title: 'Frontend Engineer',
      tags: ['RxJS', 'Expert', 'Mentored'],
      skills: [
        { name: 'Angular Proficiency', before: 50, after: 95 },
        { name: 'Performance Optimization', before: 40, after: 88 },
        { name: 'Testing', before: 25, after: 80 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Alice Johnson',
      title: 'UI/UX Specialist',
      tags: ['RxJS', 'Expert', 'Mentored'],
      skills: [
        { name: 'Angular Proficiency', before: 40, after: 90 },
        { name: 'Responsive Design', before: 35, after: 85 },
        { name: 'Accessibility', before: 20, after: 80 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Bob Brown',
      title: 'Full Stack Developer',
      tags: ['Angular', 'Beginner', 'Certified'],
      skills: [
        { name: 'Angular Proficiency', before: 45, after: 92 },
        { name: 'Backend Integration', before: 30, after: 80 },
        { name: 'Database Management', before: 25, after: 70 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Charlie Wilson',
      title: 'DevOps Engineer',
      tags: ['CI/CD', 'Intermediate', 'Certified'],
      skills: [
        { name: 'Angular Proficiency', before: 55, after: 88 },
        { name: 'Deployment', before: 45, after: 85 },
        { name: 'Monitoring', before: 30, after: 78 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Bernard Lee',
      title: 'Senior Architect',
      tags: ['Architecture', 'Expert', 'Mentored'],
      skills: [
        { name: 'Angular Proficiency', before: 70, after: 98 },
        { name: 'Scalability', before: 60, after: 95 },
        { name: 'Security', before: 50, after: 90 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Eve Adams',
      title: 'QA Specialist',
      tags: ['Testing', 'Advanced', 'Certified'],
      skills: [
        { name: 'Angular Proficiency', before: 35, after: 82 },
        { name: 'Automation', before: 40, after: 88 },
        { name: 'Bug Tracking', before: 55, after: 92 },
      ],
    },
    {
      photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      name: 'Frank Miller',
      title: 'Project Manager',
      tags: ['Agile', 'Expert', 'Mentored'],
      skills: [
        { name: 'Angular Proficiency', before: 25, after: 75 },
        { name: 'Team Leadership', before: 65, after: 90 },
        { name: 'Scrum', before: 50, after: 85 },
      ],
    },
  ];

  public setTransformations(newTransformations: Transformation[]) {
    this.#transformations = newTransformations;
  }
}