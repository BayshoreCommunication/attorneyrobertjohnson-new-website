export default async function GetAllPostData() {
  const bloData = await fetch(
    'https://backend-apexadvisor.vercel.app/site/blog',
    {
      next: { revalidate: 200 },
    },
  );
  return bloData.json();
}
