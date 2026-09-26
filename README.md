# RoboFriends

An updated, runnable version of the original robot-card search demo. The earlier loose React components now run on Vite and React, with a responsive directory and a search interaction test. The original commit history is preserved.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To verify a change:

```sh
npm test
npm run build
npm audit
```

## Demo data

The ten names and `example.com` addresses in `robots.js` are fictional, not a contact list. Robot illustrations are local SVG assets, so the cards work offline after setup. The earlier public history contains the original demo dataset and was not rewritten. No server, account system, or personal data storage is part of this app.
