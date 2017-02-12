import { TestBed, inject } from '@angular/core/testing';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs/Observable';
import { JhiLanguageService } from '../../src/language/language.service';
import { ConfigService } from '../../src/config.service';
var TranslateLoaderMock = (function () {
    function TranslateLoaderMock() {
    }
    TranslateLoaderMock.prototype.setLocations = function (locaions) { };
    return TranslateLoaderMock;
}());
var TranslateServiceMock = (function () {
    function TranslateServiceMock() {
        this.currentLoader = new TranslateLoaderMock();
    }
    TranslateServiceMock.prototype.getTranslation = function () {
        return this.lang;
    };
    TranslateServiceMock.prototype.setDefaultLang = function (lang) { };
    TranslateServiceMock.prototype.setLocations = function (locations) { };
    TranslateServiceMock.prototype.resetLang = function (lang) { };
    TranslateServiceMock.prototype.use = function (lang) {
        return Observable.of();
    };
    return TranslateServiceMock;
}());
describe('LanguageService Test', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                JhiLanguageService,
                {
                    provide: TranslateService,
                    useClass: TranslateServiceMock
                },
                {
                    provide: ConfigService,
                    useValue: new ConfigService({})
                }
            ]
        });
    });
    it('should changeLanguage', inject([JhiLanguageService], function (service) {
        service.changeLanguage('fr');
        expect(service.getCurrent()).toEqual(Promise.resolve('fr'));
    }));
});
