import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { RouterLink } from '@angular/router';

const toggle: HTMLElement = document.getElementById('toggleDark')!;
const body: HTMLBodyElement = document.querySelector('body')!;

  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-moon');
      if(this.classList.toggle('bi-brightness-high-fill')){
          body.style.background = 'white';
          body.style.color = 'black';
          body.style.transition = '2s';
      }else{
          body.style.background = 'black';
          body.style.color = 'white';
          body.style.transition = '2s';
      }
  });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
