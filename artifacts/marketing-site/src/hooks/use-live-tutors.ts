import { useQuery } from '@tanstack/react-query';
import { fetchPublicTutors } from '@/lib/tutor-api';

export function useLiveTutors() {
  return useQuery({
    queryKey: ['public-tutors'],
    queryFn: ({ signal }) => fetchPublicTutors(signal),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}