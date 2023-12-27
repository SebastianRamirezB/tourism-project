import { Card } from "./Card"

export const CardList = ({cards}) => {
  return (
    <>
        {
            cards.map(card => 
                <Card key={card.id}/>
            )
        }
    </>
  )
}
