import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { container } from "../../../utils/database";

export const GET = async () => {
  try {
    const querySpec = {
      query: 'SELECT * FROM c',
    };

    const { resources } = await container.items.query(querySpec).fetchAll();
    return NextResponse.json({resources}, {status: 200});
  } catch (error) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
};

export const dynamic = 'force-dynamic'