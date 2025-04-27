import { GridList, GridListItem } from '@/components/GridList'
import { Container } from '@/components/layout/Container'
import { HeaderWithDivider } from './TextHeaders'

type Props = {
  title: string
  items: { title: string; text: string }[]
  invert?: boolean
  className?: string
}

export function TextGridList({ title, items, invert, className }: Props) {
  return (
    <Container className={className}>
      <HeaderWithDivider name={title} invert={invert} />
      <GridList className="mt-10">
        {items.map((item, index) => {
          return (
            <GridListItem key={index} title={item.title} invert={invert}>
              {item.text}
            </GridListItem>
          )
        })}
      </GridList>
    </Container>
  )
}
