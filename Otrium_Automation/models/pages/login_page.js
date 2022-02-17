require('dotenv').config()
import { Selector, t } from 'testcafe'
import login_selectors from '../../test-helpers/selectors/login-selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import homepage_selectors from '../../test-helpers/selectors/homepage-selectors.json'


class LoginPage {

    constructor() {
        this.login = Selector(login_selectors.signin)
        this.password = Selector(login_selectors.Password)
        this.email = Selector(login_selectors.email)
        this.submit = Selector(login_selectors.submitBtn)
        this.profile_icon = Selector(homepage_selectors.profileIcon)
    }

    async ClickLoginin() {
        await t.click(this.login)
    }

    async Login(credential) {
        await common_functions.typeText(this.email, credential.email)
        await common_functions.typeText(this.password, credential.password)
        await t.click(this.submit)
    }

    async ValidateUserLoggedIn() {
        await t.expect(this.profile_icon.exists).ok("profile icon exist ")
    }
}

export default LoginPage;