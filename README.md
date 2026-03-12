# bb-web

BidBlender **marketing site** — bidblender.com.

## Overview

Static marketing site with product pages, pricing, integrations, resources, and CTAs that link to the app at **bidblender.io**.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Doc split

Docs live in `docs/`. See [docs/README.md](./docs/README.md) for the index.

## Push to GitHub

From this directory, using the **lincblender** account:

```bash
git add . && git commit -m "Initial split from BidBlender"   # if uncommitted
gh auth login   # if not already logged in as lincblender
gh repo create lincblender/bb-web --public --source=. --remote=origin --push
```

If the repo already exists:

```bash
git remote add origin https://github.com/lincblender/bb-web.git
git push -u origin main
```

## Related

- **bb-app** — The app (bidblender.io)
- **BidBlender** — Original monolith (frozen)
