/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import {AfterViewInit, Directive, ElementRef, Host, HostListener, Input, Renderer} from '@angular/core';

import * as faSort from '@fortawesome/free-solid-svg-icons/faSort';
import * as faSortDown from '@fortawesome/free-solid-svg-icons/faSortDown';
import * as faSortUp from '@fortawesome/free-solid-svg-icons/faSortUp';
import {JhiConfigService} from '../config.service';
import {JhiSortDirective} from './sort.directive';

@Directive({
    selector: '[jhiSortBy]'
})
export class JhiSortByDirective implements AfterViewInit {

    @Input() jhiSortBy: string;

    sortIcon = faSort;
    sortIconName = 'fa-sort';
    sortAscIcon = faSortUp;
    sortAscIconName = 'fa-sort-up';
    sortDescIcon = faSortDown;
    sortDescIconName = 'fa-sort-down';

    jhiSort: JhiSortDirective;

    constructor(@Host() jhiSort: JhiSortDirective, private el: ElementRef, private renderer: Renderer, configService: JhiConfigService) {
        this.jhiSort = jhiSort;
        const config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortIconName = config.sortIconName;
        this.sortAscIcon = config.sortAscIcon;
        this.sortAscIconName = config.sortAscIconName;
        this.sortDescIcon = config.sortDescIcon;
        this.sortDescIconName = config.sortDescIconName;
    }

    ngAfterViewInit(): void {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score' && this.jhiSort.predicate === this.jhiSortBy) {
            this.applyClass();
        }
    }

    @HostListener('click') onClick() {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score') {
            this.jhiSort.sort(this.jhiSortBy);
            this.applyClass();
        }
    }

    private applyClass() {
        let icon: any = this.sortIcon;
        let iconName = this.sortIconName;
        if (this.jhiSort.predicate === this.jhiSortBy) {
            if (this.jhiSort.ascending) {
                icon = this.sortAscIcon;
                iconName = this.sortAscIconName;
            } else {
                icon = this.sortDescIcon;
                iconName = this.sortDescIconName;
            }
        }

        const childIcon = this.el.nativeElement.children[1];
        this.renderer.setElementAttribute(childIcon.children[0], 'data-icon', iconName);
        this.renderer.setElementAttribute(childIcon.children[0], 'class', 'svg-inline--fa fa-w-10 ' + iconName);
        // update the path with de 5th icon attribute.
        //
        this.renderer.setElementAttribute(childIcon.children[0].children[0], 'd', icon.definition.icon[4]);
    }
}
