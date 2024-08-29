import { IconQuoteLeft } from "@/components/Icon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-5 text-CustomSepia dark:text-CustomAntiqueWhite">
      <div className="flex flex-col items-center max-w-lg gap-3">
        <span className="w-full text-center text-lg lg:text-xl font-semibold">25 de Agosto de 1992</span>
        <div className="flex gap-1">
          <IconQuoteLeft className="text-3xl lg:text-4xl flex-shrink-0"/>
          <p className="text-sm lg:text-base">
        Manifestações demandando o impeachment de Collor acontecem em Recife, Salvador, Belém, Belo Horizonte, Curitiba, João Pessoa, São Paulo e Maceió, reunindo centenas de milhares de pessoas.
          </p>
        </div>
      </div>
    </main>
  );
}
