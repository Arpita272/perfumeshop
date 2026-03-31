export async function getProducts() {
  const res = await fetch(
    "https://bvgafafypxphjdnucctq.supabase.co/functions/v1/clever-api",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Z2FmYWZ5cHhwaGpkbnVjY3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNDM0OTksImV4cCI6MjA4OTkxOTQ5OX0.5cP9L0_hDKaFCksXx36G-lvD9pb1b5zx1803YE3hpqQ",
      },
    },
  );
  return res.json();
}
