import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'thankyou', component: ThankyouComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'cookie', component: CookiePolicyComponent }
];
