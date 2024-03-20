import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { container } from '../../../../utils/database';

export const GET = async () => {
  // 今日の日付を取得
  const today = new Date().toISOString().split('T')[0];

  try {
    const querySpec = {
      query: `SELECT * FROM c WHERE c.dueDate < "${today}" AND c.isCompleted = ${false}`,
    };

    const { resources } = await container.items.query(querySpec).fetchAll();
    return NextResponse.json({ resources }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
