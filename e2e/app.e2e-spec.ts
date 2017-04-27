import { MyFirstStepsInAJs2Page } from './app.po';

describe('my-first-steps-in-ajs2 App', () => {
  let page: MyFirstStepsInAJs2Page;

  beforeEach(() => {
    page = new MyFirstStepsInAJs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
