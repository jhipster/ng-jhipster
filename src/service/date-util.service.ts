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
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

/**
 * An utility service for date.
 */
@Injectable()
export class DateUtils {

    private pattern = 'yyyy-MM-dd';

    constructor (private datePipe: DatePipe) {}

    /**
     * Method to convert the date time from server into JS date object
     */
    convertDateTimeFromServer (date: any) {
        if (date) {
            return new Date(date);
        } else {
            return null;
        }
    }

    /**
     * Method to convert the date from server into JS date object
     */
    convertLocalDateFromServer (date: any) {
        if (date) {
            let dateString = date.split('-');
            return new Date(dateString[0], dateString[1] - 1, dateString[2]);
        }
        return null;
    }

    /**
     * Method to convert the JS date object into specified date pattern
     */
    convertLocalDateToServer (date: any, pattern = this.pattern) {
        if (date) {
            let newDate = new Date(date.year, date.month - 1, date.day);
            return this.datePipe.transform(newDate, pattern);
        } else {
            return null;
        }
    }

    /**
     * Method to get the default date pattern
     */
    dateformat () {
        return this.pattern;
    }

    // TODO Change this method when moving from datetime-local input to NgbDatePicker
    toDate(date: any): Date {
        if (date === undefined) {
            return null;
        }
        let dateParts = date.split(/\D+/);
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4]);
    }
}
