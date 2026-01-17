/* 
CDN daisyui styles:
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
*/

import ButtonAdd from "./components/Button";

export default function Home() {
  return (
    <main className="text-center flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold  p-4">Hello from Next.js!</h1>
      <ButtonAdd
        label="Show user list"
        href="/pages/users"
      />
    </main>
  );
}
