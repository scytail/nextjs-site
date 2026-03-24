This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Note that this is a monorepo with two microfrontends, located in `home/` and `writing/`. These two microfrontends are completely decoupled, and are built separately using the steps below. Use these two directories as the two root directories for these two apps.

## Getting Started

Ensure that [NodeJS](https://nodejs.org/en/download) and NPM are installed. This can be verified by running the following commands:
```bash
node -v; npm -v
```

Once installed, the packages required to run the server can be installed via NPM:
```bash
npm install package.json
```

After that, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), or [http://localhost:3000](http://localhost:3000/writing) depending on the app, with your browser to see the result.

## Deploy on Vercel

This app is deployed using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Please use the console there to monitor the production deployment. The [Next.js deployment documentation](https://nextjs.org/docs/deployment) can provide more details on this process.
