import * as angular from 'angular';

export const flightsComponent: angular.IComponent = {
    controller: [function (){
        this.title = 'List of flights';
        this.flights = [
            {flightNumber: 'FN3435', from: 'Amsterdam Schiphol', to: 'Brussels airport', date: new Date()},
            {flightNumber: 'FN444', from: 'Paris Orly', to: 'Brussels airport', date: new Date() },
            {flightNumber: 'FN555', from: 'Barajas', to: 'Brussels Airport', date: new Date() },
            {flightNumber: 'FN3435', from: 'Berlin', to: 'Brussels airport', date: new Date()},
            {flightNumber: 'FN3435', from: 'Tokyo', to: 'Brussels airport', date: new Date()},
            {flightNumber: 'FN3435', from: 'Amsterdam Schiphol', to: 'Brussels airport', date: new Date()},
        ]
    }
    ],
    template: `
        <div class="container">
            <div class="card">

            <div class="header">
                <h2 class="title">{{$ctrl.title}}</h2>
            </div>
            <div class="content">
    
                <ul ng-repeat="b in $ctrl.flights" class="list-group">
                    <li class="list-group-item">
                        <a>{{b.flightNumber}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}}</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>  
    
    
    
    
        </div>
    
    
    `
}