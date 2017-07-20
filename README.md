# Shopify App Scaffold

* Ruby on Rails 5.1
* React JS
* Polaris: https://github.com/Shopify/polaris

####

# Solution
Made it to all connect together somehow using the following approach:

1. [webpacker gem](https://github.com/rails/webpacker)
2. Will work only if webpack is run in non-server mode using `./bin/webpack --watch` - because otherwise UI is on separate port and Shopify cannot communicate with one or another normally.
3. Shopify key and originDomain are taken from JS object.

If you have found a better solution for it all to work together, please, contribute here!


# Contact

[maris@itissible.com](mailto:maris@itissible.com)
