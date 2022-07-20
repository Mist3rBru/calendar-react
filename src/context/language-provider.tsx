import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type AppLanguage = 'pt' | 'en' | 'es'

interface ILanguageContext {
  lang: AppLanguage
  setLang: Dispatch<SetStateAction<AppLanguage>>
}

export const LanguageContext = createContext({} as ILanguageContext)

export function LanguageProvider (props: any) {
  const [lang, setLang] = useState<AppLanguage>('en')

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}
