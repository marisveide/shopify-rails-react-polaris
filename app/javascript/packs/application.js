/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker');

import React from 'react';
import {render} from 'react-dom';
import {Page, Card} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';


class Shopify extends React.Component {
    render() {
        return (
            <Page title="Example application">
                <Card sectioned>
                    Insert the rest of your app here, including those components detailed below, which can now
                    communicate with the Embedded App SDK.
                </Card>
            </Page>
        );
    }
}

render(
    <EmbeddedApp
        apiKey="a702002fa6ec132f06b951fd231108d3"
        shopOrigin="https://ultraexportimport.myshopify.com"
    >
        <Shopify/>
    </EmbeddedApp>,
    document.querySelector('#app') // or another DOM element you want to mount the app in
);
