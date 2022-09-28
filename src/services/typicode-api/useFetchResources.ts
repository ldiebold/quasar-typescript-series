import { Ref, ref } from 'vue'
import typicodeConfig from 'src/config/typicode'
import TypicodeModel from 'src/models/TypicodeModel'
import axios from 'axios'

export interface UseFetchResourcesOptions {
  immediate?: boolean
}

const defaultOptions: UseFetchResourcesOptions = {
  immediate: false
}

export default function useFetchResources<ModelType extends TypicodeModel> (
  entity: string,
  options: UseFetchResourcesOptions = {}
) {
  options = Object.assign({}, defaultOptions, options)

  const baseUrl = typicodeConfig.apiUrl
  const endpoint = `${baseUrl}/${entity}`

  const fetching = ref<boolean>(false)

  const records: Ref<ModelType[]> = ref([])
  const errorMessage = ref('')

  async function fetch () {
    fetching.value = true

    const response = await axios.get<ModelType[]>(endpoint)

    if (response.status !== 200) {
      errorMessage.value = response.statusText
      fetching.value = false
      return
    }

    records.value = response.data
    fetching.value = false
  }

  if (options.immediate) {
    fetch()
  }

  return {
    fetch,
    fetching,
    records,
    errorMessage
  }
}
