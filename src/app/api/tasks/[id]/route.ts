import { NextRequest } from 'next/dist/server/web/spec-extension/request';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { container } from '../../../../utils/database';

export const GET = async (_: NextRequest,{ params }:{params: {id: string}}) => {
  try {
    const querySpec = {
      query: `SELECT * FROM c WHERE c.id = "${params.id}"`,
    };

    const { resources } = await container.items.query(querySpec).fetchAll();
    return NextResponse.json({ resources }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
