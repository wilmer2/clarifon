import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwiperModule } from 'swiper/angular';
import { BackrestComponent } from './backrest/backrest.component';
import { HeroComponent } from './hero/hero.component';
import { StepComponent } from './step/step.component';
import { DetailComponent } from './detail/detail.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { MlRadioComponent } from './ml-radio/ml-radio.component';
import { ArticleFeaturesComponent } from './article-features/article-features.component';
import { DiscountBtnComponent } from './discount-btn/discount-btn.component';
import { ArticlePaymentComponent } from './article-payment/article-payment.component';
import { GuaranteeComponent } from './guarantee/guarantee.component';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, BackrestComponent, HeroComponent, StepComponent, DetailComponent, DetailInfoComponent, MlRadioComponent, ArticleFeaturesComponent, DiscountBtnComponent, ArticlePaymentComponent, GuaranteeComponent, CommentComponent],
  imports: [BrowserModule, CommonModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
