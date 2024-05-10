import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'thankyou', component: ThankyouComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'cookie', component: CookiePolicyComponent }
];
