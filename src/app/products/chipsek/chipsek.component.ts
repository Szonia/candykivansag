// import { Component } from '@angular/core';

// interface Chips {
//   nev: string;
//   image: string;
//   ar: number;
// }

// @Component({
//   selector: 'app-chipsek',
//   templateUrl: './chipsek.component.html',
//   styleUrls: ['./chipsek.component.css']
// })
// export class ChipsekComponent {
//   chipsek: Chips[] = [
//     {
//       nev: 'Sós chips',
//       image: 'https://via.placeholder.com/150',  // Használj valódi képet
//       ar: 350
//     },
//     {
//       nev: 'Paprikás chips',
//       image: 'https://via.placeholder.com/150',
//       ar: 400
//     },
//     {
//       nev: 'Cheddar sajt chips',
//       image: 'https://via.placeholder.com/150',
//       ar: 450
//     },
//     {
//       nev: 'Jalapeño chips',
//       image: 'https://via.placeholder.com/150',
//       ar: 500
//     }
//   ];
// }


import { Component } from '@angular/core';

interface Chips {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-chipsek',
  templateUrl: './chipsek.component.html',
  styleUrls: ['./chipsek.component.css']
})
export class ChipsekComponent {
  chipsek: Chips[] = [
    {
      nev: 'Sós chips',
      image: './assets/chipsImg/Beef.jpg',  // Használj valódi képet
      ar: 350,
      darab: 1
    },
    {
      nev: 'Paprikás chips',
      image: 'https://via.placeholder.com/150',
      ar: 400,
      darab: 1
    },
    {
      nev: 'Cheddar sajt chips',
      image: 'https://via.placeholder.com/150',
      ar: 450,
      darab: 1
    },
    {
      nev: 'Jalapeño chips',
      image: 'https://via.placeholder.com/150',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű chips',
      image: 'https://via.placeholder.com/150',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres chips',
      image: 'https://via.placeholder.com/150',
      ar: 600,
      darab: 1
    }
  ];

  // Kosárba rakás logika
  kosarbaRak(i: number) {
    const termek = this.chipsek[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    // Itt adhatsz hozzá kosárhoz logikát, ha szükséges
  }
}
