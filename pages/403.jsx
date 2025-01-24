/* 403 Error Page */

// Custom Components
import CustomHero from "components/headers/CustomHero";

// Custom Content
import content from "public/content/en_US/pages/error403.content"

export default function Error403() {
  return (
    <div>
      <CustomHero {...content} />
    </div>
  );
}
