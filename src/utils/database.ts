import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.DATABASE_ENDPOINT!;
const key = process.env.DATABASE_API_KEY!;
const databaseId = 'Task';
const containerId = 'item';

export const client = new CosmosClient({ endpoint, key });
export const database = client.database(databaseId);
export const container = database.container(containerId);

