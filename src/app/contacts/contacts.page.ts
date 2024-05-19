import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }

  public details = [
    {title: "EFCC", phone: "+2348093322644", image: 'assets/images/efcc.png'},
    {title: "EFCC", phone: "+23499044751", image: 'assets/images/efcc.png'},
    {title: "NCC", phone: "+23494617514", image: 'assets/images/ncc.jpg'},
    {title: "Nigerian Polic Force", phone: "+2349168343711", image: 'assets/images/npf.jpg'},
    {title: "ICPC", phone: "+2348076369260", image: 'assets/images/icpc.jpg'},
    {title: "Justice Group", phone: "+2348034923400", image: 'assets/images/justice.png'}
  ];

  
  
  // CALL NUMBER
  async callPhone(item: any) {
    console.log(item.phone);
    this.callNumber
      .callNumber(`${item.phone}`, true)
      .then((res) => console.log(`${item.phone}`, res))
      .catch((err) => console.log('Error launching dialer', err));
  }
  }