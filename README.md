# Flourish URL state settings

How to wire up a Flourish visual with an external page using [Flourish's URL state](https://github.com/kiln/flourish-url-state) settings

## Flourish GUI

1. Create new visual from https://app.flourish.studio/@duncan/line-bar-pie/20.3.5-prerelease.2 (only for testing!)
2. Add the URL settings we'd like to change
3. Publish

## HTML

4. Embed visual (with the embed code for example)

## JS

5. Set the page specific settings
6. URI encode the settings
7. Add the URI encoded JSON to the iframe's `src`
