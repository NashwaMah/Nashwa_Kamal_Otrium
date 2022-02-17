import LoginPage from '../models/pages/login_page.js'
const login_page = new LoginPage()
const login_credentials = require('../test-helpers/test-data/login-credentials').login_credentials

fixture`Login`
    .page`${login_credentials.OtriumUrl}`


test.meta({
    ID: 'Aut-001',
    SEVERITY: 'blocker',
    STORY: 'Login',
    TEST_RUN: 'Test Login for Otrium'
})
    ('Log in to Otrium', async t => {
        await login_page.ClickLoginin()
        await login_page.Login(login_credentials.Login)
        await login_page.ValidateUserLoggedIn()
    })


