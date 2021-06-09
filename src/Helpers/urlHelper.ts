import { app } from 'electron';

export default class UrlHelper {
  static russianSiteUrl = 'https://sambo.ru/';

  static moscowSiteUrl = 'https://mossambo.ru/';

  static reportProblemUrl = `https://docs.google.com/forms/d/e/1FAIpQLSecx-57HczeFQ4j9IQxx-HhjOokdAIhXE6HNOF2M0fuou04zw/viewform?usp=pp_url&entry.646005418=${app.getVersion()}`;

  static getLocalizedReportProblem(locale: string): string {
    switch (locale) {
      case 'ru':
        return `https://docs.google.com/forms/d/e/1FAIpQLSfUP0qGWmeCDKAuBMBx-MTP-ZlyjAH1BRYytEnT1W1uWWOPHA/viewform?usp=pp_url&entry.1167069479=${app.getVersion()}`;
      case 'en':
      default:
        return UrlHelper.reportProblemUrl;
    }
  }
}
