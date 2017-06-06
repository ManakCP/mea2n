import { Mea2nUsrevregPage } from './app.po';

describe('mea2n-usrevreg App', () => {
  let page: Mea2nUsrevregPage;

  beforeEach(() => {
    page = new Mea2nUsrevregPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
