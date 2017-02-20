import { BoeffenPage } from './app.po';

describe('boeffen App', () => {
  let page: BoeffenPage;

  beforeEach(() => {
    page = new BoeffenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
