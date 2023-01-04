import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useState } from 'react'
import { FormContainer } from './styles'

interface SearchFormProps {
  onSearch: (value: string) => void
}

export function SearchForm(props: SearchFormProps) {
  const [searchValue, setSearchValue] = useState('')

  // I haven't found a better way to solve this lint error
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce((value: string) => {
      props.onSearch(value)
    }, 750),
    [props],
  )

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchedText = event.target.value
    debounceSearch(searchedText)
    setSearchValue(searchedText)
  }

  return (
    <FormContainer>
      <div>
        <label htmlFor="">Publicações</label>
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Buscar conteúdo"
      />
    </FormContainer>
  )
}
