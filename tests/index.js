/* eslint-disable no-undef */
import { Selector, RequestMock } from 'testcafe';
import config from '../config/config';

const serverURL = config.app.site_url;
const apiURL = config.app.api_url;

fixture('As an User I want to able to see the Homepage so I can get started').page(serverURL);

test('Index', async (t) => {
  await t.expect(Selector('p').innerText).eql('Hello johndoe@mail.com').takeScreenshot();
});

const mock = RequestMock()
  .onRequestTo(new RegExp(`${apiURL}/api/v1/users/1`))
  .respond({
    id: 1, email: 'johndoemock@mail.com', password: 'password', created_at: '1900-01-01T00:00:00.000Z', updated_at: '1900-01-01T00:00:00.000Z',
  });

fixture('As an User I want to able to see the Homepage so I can get started (mock version)').page(serverURL).requestHooks(mock);

test('Index', async (t) => {
  await t.expect(Selector('p').innerText).eql('Hello johndoemock@mail.com').takeScreenshot();
});
