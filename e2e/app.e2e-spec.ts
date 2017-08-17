import { Angular4TranslateDemoPage } from './app.po';

describe('angular4-translate-demo App', () => {
  let page: Angular4TranslateDemoPage;

  beforeEach(() => {
    page = new Angular4TranslateDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
