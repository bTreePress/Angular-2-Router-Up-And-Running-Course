import { ThePetRepublicPage } from './app.po';

describe('the-pet-republic App', () => {
  let page: ThePetRepublicPage;

  beforeEach(() => {
    page = new ThePetRepublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
