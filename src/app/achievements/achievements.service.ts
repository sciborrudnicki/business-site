// Angular.
import { Injectable } from "@angular/core";
// Service.
import { Achievement } from "../interface/achievement.interface";

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  public get items(): Achievement[] {
    return this.#items;
  }

  #items: Achievement[] = [
    {
      icon: 'pi pi-trophy',
      title: 'Angular Expert Certification',
      description: 'Earned certification for advanced Angular skills and best practices.',
      tags: ['Angular', 'Certification']
    },
    {
      icon: 'pi pi-star',
      title: 'Top Contributor Award',
      description: 'Recognized for outstanding contributions to open-source projects.',
      tags: ['Open Source', 'Community']
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Project Completion Milestone',
      description: 'Successfully delivered 10+ full-stack projects on time.',
      tags: ['Project Management', 'Delivery']
    },
    // Add more achievements as needed, or map from your services data if migrating existing ones
  ];
};