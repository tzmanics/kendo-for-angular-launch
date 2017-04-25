import { AWholeNewNgWorldPage } from './app.po';

describe('a-whole-new-ng-world App', () => {
  let page: AWholeNewNgWorldPage;

  beforeEach(() => {
    page = new AWholeNewNgWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
