import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { MyDataProvider } from '../../providers/my-data/my-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loader: any;
  posts: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public myDataProvider: MyDataProvider) {
    console.log('--> HomePage constructor() called');
  }

  
  ionViewDidLoad() {
    console.log('--> HomePage ionViewDidLoad() called');
    this.loadData();
  }

  loadData() {
    this.loader = this.loadingCtrl.create({
      content: 'Loading data. Please wait ...',
    });


    this.loader.present().then(() => {
      this.myDataProvider.load().then(data => {
        this.loader.dismiss();
        this.posts = data;
        console.log(this.posts);
      });
    });
  }
}
