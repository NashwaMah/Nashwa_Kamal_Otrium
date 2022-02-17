
import HomePage from '../models/pages/home_page'
import LoginPage from '../models/pages/login_page'
import ProductPage from '../models/pages/products_page'
import CartPage from '../models/pages/cart_page'
import CheckoutPage from '../models/pages/checkout_page'
import * as common_functions from '../test-helpers/utils/common-functions'
import { captureRejections } from 'form-data'
const login_page = new LoginPage()
const products = require('../test-helpers/test-data/products.json').products
const login_credentials = require('../test-helpers/test-data/login-credentials').login_credentials
const checkout_details = require('../test-helpers/test-data/checkout_details.json')
const home_page = new HomePage()
const cart_page = new CartPage()
const checkout_page = new CheckoutPage()
const product_page = new ProductPage()


fixture`Product Order`
    .page`${login_credentials.OtriumUrl}`
    .beforeEach(async t => {
        await login_page.ClickLoginin()
        await login_page.Login(login_credentials.Login)
        await home_page.CloseOnBoarding()
        await home_page.RejectAdd()

    })

test.meta({
    ID: 'Aut-003',
    SEVERITY: 'Critical',
    STORY: 'Search Products Testing',
    TEST_RUN: 'Search for product'
})

    ('Search for product', async t => {
        await home_page.SearchForProduct(products.brand)
        await home_page.ValidateSearchSuggestions(products.brand)
        await home_page.SelectProduct(products.brand)
        await home_page.ValidateSearchResults(products.brand)
    })


test.meta({
    ID: 'Aut-003',
    SEVERITY: 'Critical',
    STORY: 'Cart Testing',
    TEST_RUN: 'Add Products to Cart from Home Page'
})

    ('Add Products to Cart from Home Page', async t => {
        await home_page.SearchForProduct(products.brand)
        await home_page.SelectProduct(products.brand)
        await home_page.OpenFirstProduct()
        await product_page.SelectProductSize(products.size)
        await product_page.AddToCart()
        const item_name = await product_page.GetItemName()
        await product_page.OpenShoppingCart()
        await cart_page.ValidateItemAddedToCart(item_name)
        await cart_page.ValidateTotalPrice()
    })

test.meta({
    ID: 'Aut-003',
    SEVERITY: 'Critical',
    STORY: 'Checkout Testing',
    TEST_RUN: 'Checkout Items in the cart'
})

    ('Checkout Items in the cart', async t => {
        await product_page.OpenShoppingCart()
        await cart_page.ContinuoToCheckout()
        await checkout_page.ValidateShippingAddressPage("Shipping address")
        await checkout_page.FillCheckoutDetails(checkout_details)
        await checkout_page.ContinuoToPay()
        await checkout_page.ValidatePaymentMethodPage("Shipping address")
        await checkout_page.SelectPaymentType(checkout_details.payment)
        await checkout_page.PlaceOrder()
        await checkout_page.ValidatePaymentPage()


    })