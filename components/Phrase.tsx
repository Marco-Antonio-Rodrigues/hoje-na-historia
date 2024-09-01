'use client'

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, useRef } from "react";
import { IconQuoteLeft } from "@/components/Icon";
import { eventHistoricService } from "@/services/eventHistoric";
import { useQuery } from "react-query";
import { getTodayEvent } from "@/utils/getTodayEvent";
import { formatDateToBrazilianFormat } from "@/utils/formatDateToBrazilianFormat";
import { parseHistoricalEvent } from "@/utils/parseHistoricalEvent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { HistoricalEvent } from "@/types/historicalEvents";

const Phrase = () => {
    const PhraseQuery = useQuery('phrase', eventHistoricService.getPhases);
    const [todayEvents,setTodayEvents] = useState<HistoricalEvent[]>([])
    
    const plugin = useRef(
      Autoplay({ delay: 6000, stopOnInteraction: true })
    )

    useEffect(()=> {
      if (!PhraseQuery.isFetching && PhraseQuery.data) {
        const eventPhraseRaw = getTodayEvent(PhraseQuery.data)
        const events = parseHistoricalEvent(eventPhraseRaw)
        setTodayEvents(events);
      }
    },[PhraseQuery])

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
   
    useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    return(
        <div className="flex flex-col items-center max-w-lg gap-3">
          {
            PhraseQuery.isFetching && !PhraseQuery.data ?
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-CustomCharcoal dark:border-CustomAntiqueWhite border-dotted rounded-full animate-spin"></div>
            </div>
            :
            <>
              <div className="flex flex-col gap-1">
                <IconQuoteLeft className="text-3xl lg:text-4xl flex-shrink-0"/>
                <Carousel
                  setApi={setApi}
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="-mt-1 h-[200px]">
                  {todayEvents.map((event,index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="flex flex-col h-[200px]">
                          <span className="w-full text-center text-lg lg:text-xl font-semibold">{formatDateToBrazilianFormat(event.date)}</span>
                          <div className="p-1">
                            {event.event}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="py-2 text-center text-sm text-CustomSepia/90 dark:text-CustomAntiqueWhite/90">
                  {current} de {count}
                </div>
              </div>
            </>      
          }
      </div>
    )
}

export default Phrase;