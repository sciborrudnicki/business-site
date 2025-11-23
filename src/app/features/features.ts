import { Component, effect, inject, input } from '@angular/core';
import { Feature } from './feature/feature';
import { FeaturesService } from './features.service';
import { FeatureShape } from './feature-shape.interface';



@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    Feature,
],
  templateUrl: './features.html',
  styleUrls: ['./features.scss'],
})
export class Features<T extends FeatureShape[] = FeatureShape[]> {
  features = input<T>();
  featuresService = inject<FeaturesService<T>>(FeaturesService);

  gap = input<number>(4);

  constructor() {
    effect(() => {
      const features = this.features();
      if (!features || features.length === 0) {
        this.featuresService.set(this.featuresService.get());
      }
    });
  }
}
