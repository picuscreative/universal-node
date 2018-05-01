/* eslint-disable no-undef */
import { Selector } from 'testcafe';
import config from '../config/config';

const serverURL = config.app.site_url;

fixture('As an User I want to able to see the About page so I can read more about the company').page(`${serverURL}/about`);

test('About', async (t) => {
  await t.expect(Selector('h1').innerText).eql('PICUS Creative').takeScreenshot('about');
});
