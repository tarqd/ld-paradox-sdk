# ld-paradox-sdk

Unofficial LaunchDarkly SDK that allows you to run the node-server-sdk in browser environmnets

# How it works

The node-server-sdk is bundled with parcel with a couple of custom polyfills. In order for it to work, you must override the eventsUri, streamUri, and baseUri to point to a proxy that adds CORs headers to LaunchDarkly's endpoints.

- crypto-browserify: patched to add randomUuid function
- url: Patched to add the URL property with native whatwg constructor
- https-browser: patched to support 3 arguments (url, options, callback)
- os: patched to provide version function that returns undefined

# Running the example
First clone the repo
```
git clone https://github.com/tarqd/ld-paradox-sdk.git
```
Then install the dependencies
```
npm install 
```
And finally run the example server:

```
npm run serve 
```

Open the demo server in your browser (url will be printed the console). Enter your SDK key and hit `Init`. You should see your flags show up in the `<code></code>` block below.

**Note:** The demo uses a proxy powered by cloudflare workers on my account. For production use, deploy your own proxy. 