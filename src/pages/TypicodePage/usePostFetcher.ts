import Post from 'src/models/Post'
import useFetchResources from 'src/services/typicode-api/useFetchResources'

export default function usePostFetcher () {
  const postFetcher = useFetchResources<Post>(
    'posts',
    { immediate: true }
  )

  return {
    ...postFetcher
  }
}
