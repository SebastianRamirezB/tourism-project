import { CardList } from "./CardList"
import { BaseCardsContainer } from "./ui/BaseCardsContainer"

export const TopExperiencies = () => {
  return (
    <BaseCardsContainer
    title="Top Locations to Explore"
    description="Here are some of the most visited places in 2023"
    actionComponent={<button>ver mas</button>}
    content={ <CardList cards={[{id: 1, title: 'hola'}, {id: 2, title: 'hola'}, {id: 3, title: 'hola'}]}  /> }
  />

  )
}
