import { AngularProfilePage } from './app.po';

describe('angular-profile App', () => {
  let page: AngularProfilePage;

  beforeEach(() => {
    page = new AngularProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
