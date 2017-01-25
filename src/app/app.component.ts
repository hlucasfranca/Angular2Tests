import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Formulário de Busca';
    rows = [];
    lista = [];
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];
    count: number = 0;
    offset: number = 0;
    limit: number = 10;
    

    constructor() {
     
    }

    ngOnInit() {
        this.page(this.offset, this.limit);

        for (let i = 0; i < 10; i++) {
            this.lista.push({
                value: '' + i,
                label: 'teste' + i
            });
        }
    }

    onPage(event) {
        console.log('Page Event', event);
        this.page(event.offset, event.limit);
    }

    page(offset, limit) {
        this.fetch((results) => {
            this.count = results.length;

            const start = offset * limit;
            const end = start + limit;
            let rows = [...this.rows];

            for (let i = start; i < end; i++) {
                rows[i] = results[i];
            }

            this.rows = rows;
            console.log('Page Results', start, end, rows);
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `teste.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }
}
