import { formatDistanceToNowStrict, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Item } from '../../../../models/Issues'
import { IssueContainer } from './styles'

interface IssueProps {
  item: Item
}

export function Issue({ item }: IssueProps) {
  const createdDate = new Date(item.created_at)

  return (
    <IssueContainer to={`/issue-detail/${item.number}`}>
      <header>
        <strong>{item.title}</strong>
        <time
          title={format(createdDate, 'dd/MM/yyyy HH:mm:ss')}
          dateTime={createdDate.toISOString()}
        >
          {formatDistanceToNowStrict(createdDate, {
            locale: ptBR,
            addSuffix: true,
          })}
        </time>
      </header>
      <p>{item.body}</p>
    </IssueContainer>
  )
}
