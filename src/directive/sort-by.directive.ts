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

    jhiSort: JhiSortDirective;
    config: JhiModuleConfig;

    constructor(@Host() jhiSort: JhiSortDirective, private el: ElementRef, renderer: Renderer, configService: JhiConfigService) {
        this.jhiSort = jhiSort;
        this.config = configService.getConfig();
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
        let icon: any = this.config.sortIcon;
        let iconName = this.config.sortIconName;
        if (this.jhiSort.predicate === this.jhiSortBy) {
            if (this.jhiSort.ascending) {
                icon = this.config.sortAscIcon;
                iconName = this.config.sortAscIconName;
            } else {
                icon = this.config.sortDescIcon;
                iconName = this.config.sortDescIconName;
            }
        }

        // path is stored in the 5th icon attribute.
        const svgPath = icon.definition.icon[4];
        const svgElements: NodeList = this.el.nativeElement.querySelectorAll(this.config.sortIconSvgSelector);
        if (svgElements && svgElements.length > 0) {
            const svgElement = svgElements.item(0) as SVGSVGElement;
            const pathElements = svgElement.getElementsByTagName(this.config.sortIconSvgPathSelector);
            if (pathElements && pathElements.length > 0) {
                const pathElement = pathElements.item(0);
                svgElement.setAttribute('data-icon', iconName.substr(3, iconName.length));
                svgElement.setAttribute('class', 'svg-inline--fa fa-w-10 ' + iconName);
                pathElement.setAttribute('d', svgPath);
            }
        }
    }
}
