import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  types = [
    {type: 'Helm'},
    {type: 'Armor'},
    {type: 'Pants'},
    {type: 'Gloves'},
    {type: 'Boots'},
    {type: 'Pendant'},
    {type: 'Ring'},
    {type: 'Shoulders'}
  ];
  itemData = {
    name: '',
    str: '',
    int: '',
    agi: '',
    type: ''
  };
  equipped = [];
  str = 0;
  agi = 0;
  int = 0;
  error;
  equipError;
  constructor(private dataService: DataService, private authService: AuthService, private router: Router, private http: Http) {}
  equip(item){
    let found = false;
    for(let i = 0; i < this.equipped.length; i++) {
      if(this.equipped[i].type === item.type) {
        found = true;
      }
    }
    if(found) {
      this.equipError = 'Equipment already contains a ' + item.type + '.';
    } else {
      this.equipped.push(item);
      this.str = this.str + item.str;
      this.int = this.int + item.int;
      this.agi = this.agi + item.agi;
      this.equipError = undefined;
    }
  }
  remove(item){
    const index = this.equipped.indexOf(item);
    this.equipped.splice(index, 1);
    if(index !== -1) {
      this.str = this.str - item.str;
      this.int = this.int - item.int;
      this.agi = this.agi - item.agi;
    }
  }
  removeFromDb(item){
    this.remove(item);
    this.dataService.removeFromDb(item);
  }

  addItem() {

    if (this.itemData.name !== '' && this.itemData.str !== '' && this.itemData.int !== '' && this.itemData.agi !== '' && this.itemData.type !== '') {
      this.error = null;
      this.dataService.addItem(this.itemData);
    }
    else {
      this.error = 'Do not leave any of fields empty'
    }
  }

  ngOnInit() {
    this.dataService.getHelms();
    this.dataService.getArmors();
    this.dataService.getBoots();
    this.dataService.getGloves();
    this.dataService.getPants();
    this.dataService.getPendants();
    this.dataService.getRings();
    this.dataService.getShoulders();
    this.authService.validate();
    this.http.get('http://localhost:3000/').subscribe(res => {
      if(res['_body'] !== 'logged') {
        this.router.navigateByUrl('/')
      }
    });
  }
}
