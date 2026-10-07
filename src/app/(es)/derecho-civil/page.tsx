import { CivilLawPage } from "@/components/pages/CivilLawPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "civil");

export default function Page() {
  return <CivilLawPage locale="es" />;
}
