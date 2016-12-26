import { TranslateLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class TranslatePartialLoader implements TranslateLoader {
    private locations: string[];

    constructor(private http: Http, private prefix = 'i18n', private suffix = '.json') {
    }

    public setLocations(locations: string[]) {
        this.locations = locations;
    }

    public getTranslation(lang: string): Observable<any> {
        let combinedObject = new Object();
        let oldObsevers: Observable<any>;
        let newObserver: Observable<any>;
        this.locations.forEach((value) => {
            newObserver = this.getPartFile(value, combinedObject, lang);
            if (oldObsevers == null) {
                oldObsevers = newObserver;
            } else {
                oldObsevers = oldObsevers.merge(newObserver);
            }
        });
        return oldObsevers;
    }

    private getPartFile(part: string, combinedObject: any, lang: string): Observable<any> {
        return Observable.create((observer: any) => {
            this.http.get(`${this.prefix}/${lang}/${part}${this.suffix}`).subscribe((res) => {
                let responseObj = res.json();
                Object.keys(responseObj).forEach(key => {
                    combinedObject[key] = responseObj[key];
                });
                observer.next(combinedObject);
                // Call complete to close this stream (like a promise)
                observer.complete();
            });
        });
    }
}
