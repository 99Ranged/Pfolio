import { ChessAppPage } from './app.po';

describe('chess-app App', () => {
  let page: ChessAppPage;

  beforeEach(() => {
    page = new ChessAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
