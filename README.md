A Next.js starter project using Docker. This README is a slightly edited version of the default Next.js README.

## Getting Started

First, run the development server:

```bash
# build the container 
docker compose up --build
# after built, start container in the background 
docker compose up -d
# stop
docker compose stop
# or delete container
docker compose down
# to recreate container
docker compose down -v
rm -rf node_modules .next
docker compose build --no-cache
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Json Holder](https://jsonplaceholder.typicode.com) - a fake json application. 

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
