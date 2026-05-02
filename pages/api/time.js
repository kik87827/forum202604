import React from 'react';

export default function handler(response, answer) {
  if (response.method === 'GET') {
    return answer.status(200).json(new Date().toISOString());
  }
}
