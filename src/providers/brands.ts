import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';
import { Item } from '../models/item';

@Injectable()
export class BrandsProvider {


  constructor(public http: Http, public api: Api) {

  }


}
