import { Angular4StartupPage } from './app.po';

describe('angular4-startup App', () => {
  let page: Angular4StartupPage;

  beforeEach(() => {
    page = new Angular4StartupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
