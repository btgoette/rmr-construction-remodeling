/* 403 Error Page */

// Custom Components
import Hero from "components/headers/Hero";

// Custom Content
import content from "public/content/en_US/pages/error403.content"

export default function Error403() {
  return (
    <div>
      <Hero {...content} />
    </div>
  );
}
