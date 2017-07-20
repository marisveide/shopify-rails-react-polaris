import React from 'react';
import {render} from 'react-dom';
import {Page, Card} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';


class Shopify extends React.Component {
    render() {
        return (
            <Page title="Example Application">
                <Card sectioned>
                    This is the Shopify Component inside!<br/>
                    apiKey: {ShopifyApp.apiKey}
                    shopOrigin: {ShopifyApp.shopOrigin}
                </Card>
            </Page>
        );
    }
}

export default Shopify;

render(
    <EmbeddedApp
        apiKey={ShopifyApp.apiKey}
        shopOrigin={ShopifyApp.shopOrigin}
    >
        <Shopify/>
    </EmbeddedApp>,
    document.querySelector('#app') // or another DOM element you want to mount the app in
);
