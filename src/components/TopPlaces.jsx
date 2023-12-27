import { CardList } from "./CardList"
import { RedirectButton } from "./RedirectButton"
import { BaseCardsContainer } from "./ui/BaseCardsContainer"


export const TopPlaces = () => {

  return (

    <BaseCardsContainer
      title="Plan your best trip ever"
      description="Here are some of the most visited places in 2023"
      actionComponent={<RedirectButton link="#" text="view all destination" />}
      content={ <CardList cards={[{id: 1, title: 'hola'}, {id: 2, title: 'hola'}, {id: 3, title: 'hola'}]}  /> }
    />

  )
}

