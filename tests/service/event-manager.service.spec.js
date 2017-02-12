/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { EventManager } from '../../src/service/event-manager.service';
var SpyService = (function () {
    function SpyService() {
        this.called = false;
    }
    SpyService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], SpyService);
    return SpyService;
}());
function callback(spyService) {
    spyService.called = true;
}
describe('Event Manager test', function () {
    describe('Event Manager Test', function () {
        beforeEach(function () {
            TestBed.configureTestingModule({
                providers: [
                    EventManager,
                    SpyService
                ]
            });
        });
        it('should not fail when nosubscriber and broadcasting', inject([EventManager], function (eventManager) {
            expect(eventManager.observer).toBeUndefined();
            eventManager.broadcast({ name: 'modifier', content: 'modified something' });
        }));
        it('should create an observable and callback when broadcasted', inject([EventManager, SpyService], function (eventManager, spyService) {
            expect(spyService.called).toBeFalsy();
            eventManager.subscribe('modifier', function (response) { return callback(spyService); });
            eventManager.broadcast({ name: 'modifier', content: 'modified something' });
            expect(spyService.called).toBeTruthy();
        }));
    });
});
