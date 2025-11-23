import { Component } from '@angular/core';
import { Grid } from '../grid/grid';
import { CommonModule } from '@angular/common';
import { UiContainerModule } from '../container/ui-container.module';
import { SectionHeader } from '../section-header/section-header';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule,
    Grid,

    // PrimeNG
    TagModule,

    UiContainerModule,
    SectionHeader
  ],
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
})
export class Services {

  public items = [
    {
      title: "Angular Workshops",
      description: "Hands-on workshops to master Angular concepts, best practices, and advanced techniques.",
      icon: "pi pi-book",
      tags: ["Hands-on", "Interactive", "Expert"]
    },
    {
      title: "Code Reviews",
      description: "Professional code reviews to improve code quality, performance, and maintainability.",
      icon: "pi pi-search",
      tags: ["Quality", "Performance", "Best Practices"]
    },
    {
      title: "Consulting",
      description: "Expert consulting for Angular projects, architecture design, and team training.",
      icon: "pi pi-users",
      tags: ["Expert", "Team", "Architecture"]
    },
    {
      title: 'Custom Development',
      description: 'Build custom Angular applications tailored to your specific business needs.',
      icon: "pi pi-cog",
      tags: ["Custom", "Tailored", "Scalable"]
    },
    {
      title: "Migration Services",
      description: "Migrate legacy applications to modern Angular versions seamlessly.",
      icon: "pi pi-arrow-right",
      tags: ["Migration", "Modern", "Seamless"]
    },
    {
      title: "Performance Optimization",
      description: "Optimize your Angular apps for better speed, efficiency, and user experience.",
      icon: "pi pi-bolt",
      tags: ["Fast", "Efficient", "User Experience"]
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Transform your Angular apps into PWAs for offline capabilities and better user experience.",
      icon: "pi pi-globe",
      tags: ["Offline", "PWA", "Modern"]
    },
    {
      title: "State Management Solutions",
      description: "Implement robust state management using NgRx, Akita, or other libraries.",
      icon: "pi pi-database",
      tags: ["Robust", "NgRx", "Libraries"]
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing and quality assurance services to ensure robust Angular applications.",
      icon: "pi pi-check-square",
      tags: ["Comprehensive", "QA", "Reliable"]
    },
    {
      title: "UI/UX Design",
      description: "Create stunning and user-friendly interfaces with our UI/UX design services.",
      icon: "pi pi-palette",
      tags: ["Stunning", "User-Friendly", "Design"]
    },
  ];

}
