import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MemberComponent } from './member/member';
import { MemberListComponent } from './member-list/member-list';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './info-list/info-list';
import { InfoItemComponent } from './info-item/info-item';

@NgModule({
	declarations: [MemberComponent,
    MemberListComponent,
    InfoListComponent,
    InfoItemComponent],
	imports: [CommonModule],
	exports: [MemberComponent,
	MemberListComponent,
    InfoListComponent,
    InfoItemComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {}