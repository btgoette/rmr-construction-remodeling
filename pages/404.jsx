/* 404 Error Page */

// Custom Components
import Hero from "components/headers/Hero";

// Custom Content
import content from "public/content/en_US/pages/error404.content"

export default function Error404() {
  return (
    <div>
      <Hero {...content} />
    </div>
  );
}
