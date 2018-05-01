/* eslint-disable no-undef */
import { Selector } from 'testcafe';
import config from '../config/config';

const serverURL = config.app.site_url;

fixture('As an User I want to able to see the Homepage so I can get started').page(serverURL);

test('Index', async (t) => {
  await t.expect(Selector('p').innerText).eql('Hello johndoe@mail.com').takeScreenshot('index');
});
