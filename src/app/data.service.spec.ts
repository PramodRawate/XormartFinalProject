import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { DataService } from './data.service';

import { HttpModule,XHRBackend,ResponseOptions,Response,RequestMethod } from '@angular/http';
import { MockBackend,MockConnection } from '@angular/http/testing';

let dataservice:DataService;
const mockUsers = [
                        {   
                            address: "Mannat,Bandra",
                            contact: "075524668571",
                            email: "srkking@gmail.com",
                            firstname: "King",
                            lastname: "khan",
                            password: "bazzigar",
                            username: "iamsrk",
                            _id: "5b750c924748588debb5d649"
                        },
                        {  
                            address: "B3-302, BlueRidge, Hinjewadi Pune",
                            contact: "075524668571",
                            email: "promodR@gmail.com",
                            firstname: "Pramod",
                            lastname: "Rawate",
                            password: "5136sad",
                            username: "promodk",
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
            DataService
        ]
        })
    });


    

    beforeEach(inject([DataService],(ds:DataService) => {
        dataservice=ds;
        spyOn(DataService.prototype,'getSessionStorage').and.returnValue('promodk');
    }))

        it('should get session storage and return user name',() => {
        // expect(dataservice.getSessionStorage()).toEqual('promodk');
            expect(dataservice.getSessionStorage()).toEqual('promodk');
        })
});

// it('should validate user and get MongoDb response', fakeAsync(
//     inject([
//         XHRBackend,
//         DataService
//     ],(mockBackend:XHRBackend,dataservice:DataService) => {
      
//         const expectedUrl = '/api/validate';
//         mockBackend
//     })
// ))