require('dotenv').config()
import { Selector, t } from 'testcafe'
import * as common_functions from '../../test-helpers/utils/common-functions'
import homepage_selectors from '../../test-helpers/selectors/homepage-selectors.json'

class HomePage {

    constructor() {
        this.search_field = Selector(homepage_selectors.searchinput)
        this.result_items = Selector(homepage_selectors.items)
        this.close_onboarding = Selector(homepage_selectors.closeOnBoarding)
        this.products = Selector(homepage_selectors.products)
        this.search_suggestions = Selector(homepage_selectors.search_suggestion)
        this.search_results = Selector(homepage_selectors.search_results)
        this.reject_add = Selector(homepage_selectors.reject_add)
    }
    async SearchForProduct(product) {
        await common_functions.typeText(this.search_field, product)
    }
    async ValidateSearchSuggestions(product) {
        if (this.search_suggestions.count > 0) {
            for (let i = 0; i < this.search_suggestions.count; i++) {
                await t.expect(this.search_suggestions.nth(i)).contains(product)
            }
        }
        else {
            await t.expect("No results for‘" + product + " ’".exists).ok("no results for this product")
        }
    }
    async SelectProduct(product) {
        await t.click(this.result_items.withText(product))
    }
    async CloseOnBoarding() {
        if (await this.close_onboarding.exists) {
            await t.click(this.close_onboarding)
        }
    }
    async RejectAdd() {
        await t.click(this.search_field)
    }
    async OpenFirstProduct() {
        await t.click(this.products.nth(0))
    }
    async ValidateSearchResults(product) {
        for (let i = 0; i < this.search_results.count; i++) {
            await t.expect(this.search_results.nth(i)).contains(product)
        }
    }
}

export default HomePage;