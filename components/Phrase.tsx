'use client'

import { useEffect, useState } from "react";
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Phrase = () => {
    const PhraseQuery = useQuery('phrase', eventHistoricService.getPhases);
    const [phraseFromToday,setPhraseFromToday] = useState('')
    const [dateFormatBrazil,setDateFormatBrazil] = useState('')

    useEffect(()=> {
      if (!PhraseQuery.isFetching && PhraseQuery.data) {
        const eventPhraseRaw = getTodayEvent(PhraseQuery.data)
        const {date, phrase} = parseHistoricalEvent(eventPhraseRaw)
        setPhraseFromToday(phrase);
        setDateFormatBrazil(formatDateToBrazilianFormat(date))
      }
    },[PhraseQuery,phraseFromToday])

    return(
        <div className="flex flex-col items-center max-w-lg gap-3">
          {
            PhraseQuery.isFetching && !PhraseQuery.data ?
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-CustomCharcoal dark:border-CustomAntiqueWhite border-dotted rounded-full animate-spin"></div>
            </div>
            :
            <>
              <span className="w-full text-center text-lg lg:text-xl font-semibold">{dateFormatBrazil}</span>
              <div className="flex gap-1">
                <IconQuoteLeft className="text-3xl lg:text-4xl flex-shrink-0"/>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="-mt-1 h-[200px]">
                    {Array.from({ length: 1 }).map((_, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                          {phraseFromToday}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </>      
          }
      </div>
    )
}

export default Phrase;