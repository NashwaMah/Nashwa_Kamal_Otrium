import { Selector, t } from 'testcafe'
import cart_selectors from '../../test-helpers/selectors/cart_selectors.json'

class CartPage {

    constructor() {
        this.continuo_to_checkout = Selector(cart_selectors.checkout)
        this.items_name = Selector(cart_selectors.items_name).child("div")
        this.items_price = Selector(cart_selectors.items_price).child(1).child("span")
        this.taxes = Selector(cart_selectors.taxes).child(1).child("span")
        this.total_price = Selector(cart_selectors.total_price).child(1).child("span")
    }
    async ContinuoToCheckout() {
        await t.click(this.continuo_to_checkout)
    }
    async ValidateItemAddedToCart(item) {
        const item_exist = Selector("div").withText(item)
        await t.expect(item_exist.exists).ok("Item added in cart ")
    }
    async ValidateTotalPrice() {

        const final_item_price = this.RemoveEuroSign(await this.items_price.innerText)
        const total_price = this.RemoveEuroSign(await this.total_price.innerText)
        if (await this.taxes.innerText == "Free") {
            await t.expect(parseFloat(total_price)).eql(parseFloat(final_item_price))
        }
        else {
            const tax_value = this.RemoveEuroSign(await this.taxes.innerText.innerText)
            await t.expect(parseFloat(total_price)).eql(parseFloat(final_item_price) + parseFloat(tax_value))
        }
    }

    async RemoveEuroSign(price) {
        return price.replace(/\€/g, '')
    }

}

export default CartPage;