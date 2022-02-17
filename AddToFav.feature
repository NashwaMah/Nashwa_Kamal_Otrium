Feature: Save a Favourite Item for later Purpose


    User should be able to save a favourite item for later purposes
    and User should be able to buy a saved favourite item.

    Scenario: Check Add to Favourite button added to products in Products Page
        Given User Logged in
        When Open Products Page
        Then Save as Favourite Button added for each product

    Scenario: Check Add to Favourite button added to product in Item Page
        Given User Logged in
        When Open Products Page
        And Open Specific Item
        Then Save as Favourite Button exist inside Item Page

    Scenario: Check Favourite Page created and link added in account menu
        Given User Logged in
        When Open account Details
        Then Favourite Link exist
        And Favourite Link Redirect to Favourite Page

    Scenario: Select Item as Favourite and check it is added in Favourite Page and Item Icon changed
        Given User Logged in
        And Open Products Page
        When Save Product as Favourite
        Then Favourite Icon changed to be fully colored
        And Product added in Favourite Page

    Scenario: UnSelect Item as Favourite and check it is removed from Favourite Page
        Given User Logged in
        And Open Products Page
        And Save Product as Favourite
        When unsave Product as Favourite
        Then Favourite Icon changed to be not colored
        And Product removed from Favourite Page

    Scenario: Validate user can remove items from Favourite Page
        Given User Logged in
        And Open Products Page
        And Open Specific Item
        And Save Item as Favourite
        When unsave Product as Favourite
        Then Favourite Icon changed to be not colored
        And Product removed from Favourite Page

    Scenario: Validate user can save multiple items as Favourite
        Given User Logged in
        And Open Products Page
        When Save multiple items as Favourite
        Then Favourite Icon changed to be colored for all selected products
        And All products added to Favourite Page

    Scenario: Validate message appear when save item as Favourite
        Given User Logged in
        And Open Products Page
        When Save Product as Favourite
        Then Message appear Product Added to Favourite

    Scenario: Validate message appear when unsave item as Favourite
        Given User Logged in
        And Open Products Page
        And Save Product as Favourite
        When unsave Product as Favourite
        Then Message appear Product removed from Favourite

    Scenario: Validate Add to cart button avaliable for all items in Favourite page
        Given User Logged in
        And Open Products Page
        And Save Product as Favourite
        When Open Favourite Page
        Then Add to cart button exist for each product in Favourite Page

    Scenario: Validate Added items to cart not removed from Favourite page
        Given User Logged in
        And Open Products Page
        And Save Product as Favourite
        When Open Favourite Page
        And Add product to cart
        Then product added to cart
        And Product not removed from Favourite page


