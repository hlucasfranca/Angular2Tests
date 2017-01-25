import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Formulário de Busca';

    data = [];

    constructor() {
        for (let i = 0, c = 'a'; i < 10; i++ , c += c) {
            this.data.push({
                code: i,
                name: c
            });
        }
    }
}
