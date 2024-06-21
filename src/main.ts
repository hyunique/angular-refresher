import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  //It gets object which has 'bootstrapModule' method. We pass AppModule which we imported in line3.
  // See app.module.ts to see more detailed explanation.
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
