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
import {Component, Input} from '@angular/core';

@Component({
    selector: 'jhi-metrics-services',
    template: `<h3 jhiTranslate="metrics.servicesstats.title">Services statistics (time in millisecond)</h3>
    <div class="table-responsive" *ngIf="!updating">
        <table class="table table-striped">
            <thead>
            <tr>
                <th jhiTranslate="metrics.servicesstats.table.name">Service name</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.count">Count</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.mean">Mean</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.min">Min</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.p50">p50</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.p75">p75</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.p95">p95</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.p99">p99</th>
                <th class="text-right" jhiTranslate="metrics.servicesstats.table.max">Max</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let entry of servicesMetrics | keys">
                <td>{{entry.key}}</td>
                <td class="text-right">{{entry.value.count}}</td>
                <td class="text-right">{{entry.value.mean | number:'1.0-3'}}</td>
                <td class="text-right">{{entry.value['0.0'] | number:'1.0-3'}}</td>
                <td class="text-right">{{entry.value['0.5'] | number:'1.0-3'}}</td>
                <td class="text-right">{{entry.value['0.75'] | number:'1.0-3'}}</td>
                <td class="text-right">{{entry.value['0.95'] | number:'1.0-3'}}</td>
                <td class="text-right">{{entry.value['0.99'] | number:'1.0-3'}}</td>
                <td class="text-right">{{entry.value.max | number:'1.0-3'}}</td>
            </tr>
            </tbody>
        </table>
    </div>`
})
export class JhiMetricsServicesComponent {

    /**
     * object containing service related metrics
     */
    @Input() servicesMetrics: {};

    /**
     * boolean field saying if the metrics are in the process of being updated
     */
    @Input() updating: boolean;

}
