    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';

    import { PfolioComponent }   from './pfolio-head/pfolio.component';
    import { PfolioBodyComponent }  from './pfolio-body/pfolio-body.component';


    const appRoutes: Routes = [
      { path: 'pfolio-content', component: PfolioBodyComponent },
      { path: '**', redirectTo: '/pf2', pathMatch: 'full' }
    ];

    @NgModule({
      imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
      ],
      exports: [
        RouterModule
      ]
    })
    export class AppRoutingModule {}
