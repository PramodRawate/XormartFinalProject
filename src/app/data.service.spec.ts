import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { DataService } from './data.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage'
import { CookieService } from '../../node_modules/ngx-cookie-service';
import { HttpModule,XHRBackend,ResponseOptions,Response,RequestMethod } from '@angular/http';
import { MockBackend,MockConnection } from '@angular/http/testing';

let dataservice:DataService;
const mockUsers = [
                        {  
                            address: "B3-302, BlueRidge, Hinjewadi Pune",
                            contact: "075524668571",
                            email: "promodR@gmail.com",
                            firstname: "Pramod",
                            lastname: "Rawate",
                            password: "5136sad",
                            username: "promodak",
                            _id: "5b750c924748588debb5d649"
                        },
                        {   
                            address: "Mannat,Bandra",
                            contact: "075524668571",
                            email: "srkking@gmail.com",
                            firstname: "King",
                            lastname: "khan",
                            password: "bazzigar",
                            username: "iamsrk",
                            _id: "5b750c924748588debb5d649"
                        }
                ]
describe('DataService', () => {

    beforeEach( () =>{ 
        TestBed.configureTestingModule({
        imports:[HttpModule],
        providers: [
            {
                provide:XHRBackend,
                useClass:MockBackend
            },
            MockBackend,
            DataService,
            CookieService,
            LocalStorageService, 
            SessionStorageService 
        ]
        });
    });

    it('should validate user and get MongoDb response', fakeAsync(
        inject([
            XHRBackend,
            DataService
        ],(mockBackend:MockBackend,dataservice:DataService) => {
          
            const expectedUrl = '/api/validate';
            TestBed.get(MockBackend).connections.subscribe(
                (connection:MockConnection) => {
                    expect(connection.request.method).toBe(RequestMethod.Get);
                    expect(connection.request.url).toBe(expectedUrl);

                    connection.mockRespond(new Response(
                        new ResponseOptions({body:mockUsers})
                    ));
                });

                dataservice.validateUser({'username':'promodk','password':'5136sad'})
                    .subscribe(res => {
                        expect(res).toEqual(mockUsers);
                    })
        })
    ))


    beforeEach(inject([DataService],(ds:DataService) => {
        dataservice=ds;
        spyOn(DataService.prototype,'getSessionStorage').and.returnValue('promodk');
    }))

        it('should get session storage and return user name',() => {
        expect(dataservice.getSessionStorage()).toEqual('promodk');
            // expect(dataservice.getSessionStorage()).toEqual('promodk');
        })

});


    //  *********** Add this after beforeEach **********************
 