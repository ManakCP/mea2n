import { Mea2nUsrevregPage } from './app.po';

describe('mea2n-usrevreg App', () => {
  let page: Mea2nUsrevregPage;

  beforeEach(() => {
    page = new Mea2nUsrevregPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
