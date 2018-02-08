/// <reference path="../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" /> 
import { Injectable } from '@angular/core';

/*
  Generated class for the MyDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyDataProvider {
  data: any = null;

  constructor() {
    console.log('--> MyDataProvider constructor() called');
  }

  load() {
    console.log('--> MyDataProvider loading data from adapter ...');
    return new Promise((resolve, reject)  => {
      if (this.data) {
        // already loaded data
        return resolve(this.data);
      }
      // don't have the data yet
      let dataRequest = new WLResourceRequest("/adapters/JavascriptHTTP/getFeed", WLResourceRequest.GET);
      dataRequest.send().then(
        (response) => {
          console.log('--> MyDataProvider loaded data from adapter\n', response);
          this.data = response.responseJSON;
          resolve(this.data);
        }, (failure) => {
          console.log('--> MyDataProvider failed to load data\n', JSON.stringify(failure));
          reject(failure);
        })
    });
}

}
