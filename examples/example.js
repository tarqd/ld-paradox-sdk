import * as ld from '@launchdarkly/node-server-sdk';
let client = null;
async function main() {
    const initButton = document.getElementById('init');
    initButton.addEventListener('click', init);

}
async function init() {
    let sdk_key = document.getElementById("sdk_key").value;
    if (client !== null) {
        try {
            await client.close();
        } catch(e) {
            console.error(e);
            client = null;
        }
    }
    // Initialize with a demo cors proxy
    // you should implemenent your own, don't trust mine
    client = ld.init(sdk_key, {
        eventsUri: 'https://events-ld.arq.sh',
        streamUri: 'https://stream-ld.arq.sh',
        baseUri: 'https://sdk-ld.arq.sh',
    });
    client.on('ready', refreshFlags);
    client.on('update', refreshFlags)
}

async function refreshFlags() {
    const display = document.getElementById('flags');
    if (client === null) {
        display.innerText = "no client";
        return;
    }
    const flags = await client.allFlagsState({
        key: 'paradox-demo',
        anonymous: true,
    });
    display.innerText = JSON.stringify(flags.toJSON(), null, 2);
}

document.addEventListener('DOMContentLoaded', main);
