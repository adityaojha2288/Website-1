import { SimpcoCsPage } from './app.po';

describe('simpco-cs App', () => {
  let page: SimpcoCsPage;

  beforeEach(() => {
    page = new SimpcoCsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
