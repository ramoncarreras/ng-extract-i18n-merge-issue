import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `


    <h1 i18n="This is the welcoming message">Welcome!</h1>

    <p i18n>Duplicated text</p>
    <p i18n>Duplicated text</p>
    <p i18n>Duplicated text</p>


  `,
  styles: [],
})
export class AppComponent {

  duplicatedText = $localize`:This is the description:Duplicated text`;

  textWithDescription = $localize`:This is the description of a non duplicated text:Non duplicated text`;

  textWidthDescriptionDuplicated = $localize`:Description of first duplicated text:Duplicated text with description`;
  textWidthDescriptionDuplicated2 = $localize`:Description of second duplicated text:Duplicated text with description`;
}
