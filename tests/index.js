/* eslint-disable no-undef */
import { Selector } from 'testcafe';

const config = require('../config/config');

fixture('As an User I want to able to see the Homepage so I can get started');

test.page`${config.app.site_url}`('- Homepage Getting Started ', async (t) => {
  await t.expect(Selector('body').find('h1').innerText).eql('project-name').takeScreenshot('index');
});
