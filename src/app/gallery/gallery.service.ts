import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class GalleryService {
  getImages(): Promise<{itemImageSrc: string, thumbnailImageSrc: string, alt: string, title: string}[]> {
    return Promise.resolve([
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        alt: 'Angular project development on a laptop screen',
        title: 'Modern Web Development Showcase'
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Responsive web design and Angular components',
        title: 'Responsive Angular UI Components'
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Coding and debugging Angular applications',
        title: 'Angular Code Debugging Session'
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Building scalable Angular web apps',
        title: 'Scalable Angular Application Architecture'
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Modern dashboard built with Angular',
        title: 'Angular Dashboard and Analytics'
      },
      // {
      //   itemImageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      //   thumbnailImageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      //   alt: 'Angular e-commerce platform development',
      //   title: 'E-Commerce Platform in Angular'
      // },
      // {
      //   itemImageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      //   thumbnailImageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      //   alt: 'Collaborative Angular project coding',
      //   title: 'Team Collaboration on Angular Projects'
      // },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Angular mobile-responsive design',
        title: 'Mobile-First Angular Design'
      }
    ]);
  }
}
