import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  list_value1 = [];
  opened=-1;
  list_value: Array<any> = [
    {
      "Test": {

        "Sub Test": {

          "Example1": "hai",
          "Ex2": "hello"

        },



        "Test": {

          "Example2": "hai2"
        }


      },


      "Test3": {

        "Sub Test2": {

          "Example1": "hai",
          "Ex2": "hello"

        },



        "Test": {

          "Example2": "hai2"
        }


      },
    }

  ]


}
