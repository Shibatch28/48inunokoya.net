import HomePage from "@/components/pages/Home";
import fs from "fs";

const filenames = fs.readdirSync("public/banners");

export default function Home() {
  const bannerFiles = filenames.map((file) => `/banners/${file}`);
  return <HomePage bannerImages={bannerFiles} />;
}
