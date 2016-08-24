import { Rc5practicePage } from './app.po';

describe('rc5practice App', function() {
  let page: Rc5practicePage;

  beforeEach(() => {
    page = new Rc5practicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
