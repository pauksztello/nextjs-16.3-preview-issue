import type { SearchParams } from "next/dist/server/request/search-params";
import { Suspense } from "react";
import db from "@/lib/db";

type Props = PageProps<"/">;

export default function Page({ searchParams }: Props) {
  return (
    <Suspense>
      <TestComponent searchParams={searchParams} />
    </Suspense>
  );
}

async function TestComponent({ searchParams }: { searchParams: Props["searchParams"] }) {
  const test = await listItems(await searchParams);
  return <pre>{JSON.stringify(test, null, 2)}</pre>;
}

export async function listItems(params: SearchParams) {
  "use cache";

  return await db.query.itemsTable.findMany();
}
