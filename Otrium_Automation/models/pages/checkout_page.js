
import { Selector, t, ClientFunction } from 'testcafe'
import * as common_functions from '../../test-helpers/utils/common-functions'
import checkout_selectors from '../../test-helpers/selectors/checkout_selectors.json'


class CheckoutPage {

    constructor() {
        this.first_name = Selector(checkout_selectors.firstname)
        this.last_name = Selector(checkout_selectors.lastname)
        this.shipping_email = Selector(checkout_selectors.shippingEmail)
        this.shipping_email_repeat = Selector(checkout_selectors.shippingEmailRepeat)
        this.phone = Selector(checkout_selectors.phone)
        this.country = Selector(checkout_selectors.country)
        this.postalcode = Selector(checkout_selectors.postalcode)
        this.house_number = Selector(checkout_selectors.houseNumber)
        this.continuo_checkout = Selector(checkout_selectors.continuoCheckout)
        this.country_text = Selector(checkout_selectors.countrytext)
        this.shipping_address = Selector(checkout_selectors.shippingAddress)
        this.billing_firstname = Selector(checkout_selectors.billingfirstname)
        this.billing_lastname = Selector(checkout_selectors.billinglastname)
        this.billing_country = Selector(checkout_selectors.billingcountryfield)
        this.billing_postcode = Selector(checkout_selectors.billingpostcode)
        this.billing_housenumber = Selector(checkout_selectors.billinghousenumber) 
        this.place_order = Selector(checkout_selectors.placeOrder)
    }

    async FillCheckoutDetails(details) {
        await common_functions.typeText(this.first_name, details.firstname)
        await common_functions.typeText(this.last_name, details.lastname)
        await common_functions.typeText(this.shipping_email, details.shippingEmail)
        await common_functions.typeText(this.shipping_email_repeat, details.shippingEmailRepeat)
        await common_functions.typeText(this.phone, details.phone)
        await t.click(this.country)
        await common_functions.typeText(this.country_text, details.country)
        await common_functions.typeText(this.postalcode, details.postalcode)
        await common_functions.typeText(this.house_number, details.houseNumber)
        await t.pressKey("tab")
        if (details.billingAddress == "Yes") {
            console.log("inside billing address different")
            await t.wait(1000)
            await t.click(this.shipping_address)
            await common_functions.typeText(this.billing_firstname, details.billingFirstName)
            await common_functions.typeText(this.billing_lastname, details.billingLastName)
            await common_functions.typeText(this.billing_postcode, details.billingPostCode)
            await common_functions.typeText(this.billing_housenumber, details.billingHouseNumber)
            await t.pressKey("tab")
        }
    }

    async ContinuoToPay() {
        console.log("continuo to pay")
        await t.click(this.continuo_checkout)
    }

    async SelectPaymentType(payment_type) {
        const payment = Selector("label").withText(payment_type)
        await t.click(payment)
    }


    async PlaceOrder() {
        await t.click(this.place_order.nth(1))
    }


    async ValidateShippingAddressPage() {
        const shipping_address = Selector("h3").withText("SHIPPING ADDRESS")
        await shipping_address.with({ visibilityCheck: true })();
        await t.expect(await shipping_address.exists).ok("user redirected to shipping address page ")
    }

    async ValidatePaymentMethodPage() {
        const payment_method = Selector("h4").withText("PAYMENT METHOD")
        await payment_method.with({ visibilityCheck: true })();
        await t.expect(await payment_method.exists).ok("user redirected to Payment method page ")
    }
    async ValidatePaymentPage() {
        await t.wait(1000)
        const getURL = await ClientFunction(() => window.location.href)();
        console.log(getURL)
        await t.expect(getURL).contains("payment")
    }
}

export default CheckoutPage;