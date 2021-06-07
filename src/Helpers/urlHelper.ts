import { app } from 'electron';

export default class UrlHelper {
  public static russianSiteUrl = 'https://sambo.ru/';

  public static moscowSiteUrl = 'https://mossambo.ru/';

  public static reportProblemUrl = `https://docs.google.com/forms/d/e/1FAIpQLSecx-57HczeFQ4j9IQxx-HhjOokdAIhXE6HNOF2M0fuou04zw/viewform?usp=pp_url&entry.646005418=${app.getVersion()}`;
}
