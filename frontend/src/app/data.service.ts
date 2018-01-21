import { Injectable } from '@angular/core';
import { Http } from '@angular/http'


@Injectable()
export class DataService {
  helms = [];
  armors = [];
  boots = [];
  gloves = [];
  pants = [];
  pendants = [];
  rings = [];
  shoulders = [];
  constructor(private http: Http) { }

  addItem(itemData){
    this.http.post('http://localhost:4000/addnew', itemData).subscribe(res => {
      if (res.json().type === 'Helm') this.helms.push(res.json());
      if (res.json().type === 'Armor') this.armors.push(res.json());
      if (res.json().type === 'Boots') this.boots.push(res.json());
      if (res.json().type === 'Gloves') this.gloves.push(res.json());
      if (res.json().type === 'Pants') this.pants.push(res.json());
      if (res.json().type === 'Pendant') this.pendants.push(res.json());
      if (res.json().type === 'Ring') this.rings.push(res.json());
      if (res.json().type === 'Shoulders') this.shoulders.push(res.json());
    });
  }
  getHelms() {
    this.http.get('http://localhost:4000/gethelms').subscribe(res => {
      this.helms = res.json();
    })
  }
  getArmors() {
    this.http.get('http://localhost:4000/getarmors').subscribe(res => {
      this.armors = res.json();
    })
  }
  getBoots() {
    this.http.get('http://localhost:4000/getboots').subscribe(res => {
      this.boots = res.json();
    })
  }
  getGloves() {
    this.http.get('http://localhost:4000/getgloves').subscribe(res => {
      this.gloves = res.json();
    })
  }
  getPants() {
    this.http.get('http://localhost:4000/getpants').subscribe(res => {
      this.pants = res.json();
    })
  }
  getPendants() {
    this.http.get('http://localhost:4000/getpendants').subscribe(res => {
      this.pendants = res.json();
    })
  }
  getRings() {
    this.http.get('http://localhost:4000/getrings').subscribe(res => {
      this.rings = res.json();
    })
  }
  getShoulders() {
    this.http.get('http://localhost:4000/getshoulders').subscribe(res => {
      this.shoulders = res.json();
    })
  }
  removeFromDb(item) {
    this.http.post('http://localhost:4000/remove', item).subscribe(res => {
      const type = res.json().type;
      switch(type) {
        case 'Helm': this.getHelms(); break;
        case 'Armor': this.getArmors(); break;
        case 'Boots': this.getBoots(); break;
        case 'Gloves': this.getGloves(); break;
        case 'Pants': this.getPants(); break;
        case 'Pendant': this.getPendants(); break;
        case 'Ring': this.getRings(); break;
        case 'Shoulders': this.getShoulders(); break;
      }
    })
  }



}
