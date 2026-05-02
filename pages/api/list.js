import { connectDB } from '@/util/database';
import React from 'react';

export default async function handler(response, answer) {
  const client = await connectDB;
  const db = client.db('forum_2025');
  let result = await db.collection('post').find().toArray();
  if (response.method === 'GET') {
    return answer.status(200).json(result);
  }
}
