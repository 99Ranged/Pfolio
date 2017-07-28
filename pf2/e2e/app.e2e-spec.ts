import { Pf2Page } from './app.po';

describe('pf2 App', () => {
  let page: Pf2Page;

  beforeEach(() => {
    page = new Pf2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
