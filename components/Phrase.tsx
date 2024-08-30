'use client'

import { useEffect, useState } from "react";
import { IconQuoteLeft } from "@/components/Icon";
import { eventHistoricService } from "@/services/eventHistoric";
import { useQuery } from "react-query";
import { getTodayEvent } from "@/utils/getTodayEvent";
import { formatDateToBrazilianFormat } from "@/utils/formatDateToBrazilianFormat";
import { parseHistoricalEvent } from "@/utils/parseHistoricalEvent";

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
                <p className="text-sm lg:text-base">
                  {phraseFromToday}
                </p>
              </div>
            </>      
          }
      </div>
    )
}

export default Phrase;