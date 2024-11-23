import { useMutation } from '@tanstack/react-query';
import { sendQuestion } from './api';

export function useSendQuestionMutation() {
  return useMutation({
    mutationFn: sendQuestion,
  });
}
