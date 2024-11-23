const baseUrl = 'https://c895-218-146-42-40.ngrok-free.app';
import { tarotCard } from '../_data/tarot';

interface SendQuestionRequest {
  question_message: string;
  card: (typeof tarotCard)[keyof typeof tarotCard];
}

interface SendQuestionResponse {
  answer_message: string;
}

export async function sendQuestion({ question_message, card }: SendQuestionRequest): Promise<SendQuestionResponse> {
  try {
    const response = await fetch(`${baseUrl}/v0/tarot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question_message, card }),
    });
    if (!response.ok) {
      throw new Error('Failed to send question');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Failed to send question');
  }
}
