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


// render(
//     <EmbeddedApp
//         apiKey="a702002fa6ec132f06b951fd231108d3"
//         shopOrigin="https://ultraexportimport.myshopify.com"
//     >
//         <Shopify/>
//     </EmbeddedApp>,
//     document.querySelector('#app') // or another DOM element you want to mount the app in
// );
