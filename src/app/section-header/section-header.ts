import { Component, input } from '@angular/core';
// 
import { SectionHeaderService } from './section-header.service';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {
  public description = input('The description of the Section Header section goes here.');
  public icon = input('pi pi-briefcase');
  public title = input('Section Header');
  public size = input<'small' | 'medium' | 'large'>('small');

  constructor(public headerService: SectionHeaderService) {}
}