
import { Selector, t } from 'testcafe'
import product_selectors from '../../test-helpers/selectors/productpage_selectors.json'


class ProductPage {

  constructor() {
    this.size = Selector(product_selectors.size)
    this.add_to_cart = Selector(product_selectors.addtocart)
    this.go_to_cart = Selector(product_selectors.goToCart)
    this.item_name = Selector(product_selectors.item_name)
  }

  async GetItemName() {
    return await this.item_name.innerText
  }
  async SelectProductSize(size) {
    const product_size = Selector("div[role='option']").withExactText(size)
    await t.click(this.size)
    await t.click(product_size)
  }

  async AddToCart() {
    await t.click(this.add_to_cart)
  }

  async OpenShoppingCart() {
    await t.click(this.go_to_cart)
  }
}

export default ProductPage;