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
import { Directive, Input, Output, Renderer, EventEmitter, ElementRef } from '@angular/core';
import { JhiConfigService } from '../config.service';

import * as faSort from '@fortawesome/free-solid-svg-icons/faSort';

@Directive({
    selector: '[jhiSort]'
})
export class JhiSortDirective {
    @Input() predicate: string;
    @Input() ascending: boolean;
    @Input() callback: Function;

    sortIcon = faSort;
    sortIconName = 'fa-sort';

    @Output() predicateChange: EventEmitter<any> = new EventEmitter();
    @Output() ascendingChange: EventEmitter<any> = new EventEmitter();

    element: any;

    constructor(el: ElementRef, private renderer: Renderer, configService: JhiConfigService) {
        this.element = el.nativeElement;
        const config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortIconName = config.sortIconName;
    }

    sort(field: any) {
        this.resetClasses();
        if (field !== this.predicate) {
            this.ascending = true;
        } else {
            this.ascending = !this.ascending;
        }
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    }

    private resetClasses() {
        const allThIcons = this.element.querySelectorAll('fa-icon');
        // Use normal loop instead of forEach because IE does not support forEach on NodeList.
        for (let i = 0; i < allThIcons.length; i++) {

            const faIconElement = allThIcons[i];

            this.renderer.setElementAttribute(faIconElement.children[0], 'data-icon', 'sort');
            this.renderer.setElementAttribute(faIconElement.children[0], 'class', 'svg-inline--fa fa-w-10 ' + this.sortIconName);
            this.renderer.setElementAttribute(faIconElement.children[0].children[0], 'd', this.sortIcon.definition.icon[4]);
        }
    }
}
