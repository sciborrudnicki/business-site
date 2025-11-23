
import { NgModule } from '@angular/core';
import { Container } from './container';
import { ContainerTemplateDirective } from './container-template.directive';
import { UiPaddingService } from '../ui/padding/ui-padding.service';


@NgModule({
  imports: [
    Container,
    ContainerTemplateDirective
  ],
  exports: [
    Container,
    ContainerTemplateDirective,
  ],
  providers: [UiPaddingService]
})
export class UiContainerModule {}