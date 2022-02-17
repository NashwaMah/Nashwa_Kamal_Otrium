import { t, Role } from 'testcafe'
import LoginPage from '../../models/pages/login_page.js'
const login_credentials = require('../test-data/login-credentials').login_credentials

export async function typeText(field, text) {
    if (text) {
        await t
            .click(field)
            .pressKey('ctrl+a delete');
        await t.typeText(field, text, { paste: true })
    }
    else {
        console.log("empty value passed ")
    }

}
export const otrium_role = Role(`${login_credentials.OtriumUrl}`, async t => {
    const login_page = new LoginPage();
    await login_page.ClickLoginin()
    await login_page.Login(login_credentials.Login);
}, { preserveUrl: true });

