import { useMutation } from '@tanstack/react-query';
import { sendFeedback, sendQuestion } from './api';

export function useSendQuestionMutation() {
  return useMutation({
    mutationFn: sendQuestion,
  });
}

export function useSendFeedbackMutation() {
  return useMutation({
    mutationFn: sendFeedback,
  });
}
