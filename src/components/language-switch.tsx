import { AppLanguage } from '../context'
import { useLang } from '../hooks'
import Select from 'react-select'

export function LanguageSwitch () {
  const context = useLang()
  // eslint-disable-next-line no-unused-vars
  const languages: { [lang in AppLanguage]: string } = {
    en: 'English',
    pt: 'Portuguese',
    es: 'Spanish'
  }

  return (
    <Select
      styles={{
        container: base => ({
          ...base,
          position: 'fixed',
          top: '1rem',
          left: '1rem'
        }),
        control: (base, state) => ({
          ...base,
          background: '#121214',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: state.isFocused ? '#00875f' : '#121214',
          boxShadow: state.isFocused ? '0 0 10px #00875f' : '',
          ':hover': {
            borderColor: '#00875f',
            boxShadow: '0 0 10px #00875f'
          }
        }),
        singleValue: base => ({
          ...base,
          color: 'white'
        }),
        menuList: base => ({
          ...base,
          background: '#121214',
          border: '2px solid #00875f'
        }),
        option: base => ({
          ...base,
          background: '#121214',
          color: 'white',
          ':hover': {
            background: '#00875f'
          }
        })
      }}
      options={Object.entries(languages).map(([value, label]) => ({
        label,
        value: value as AppLanguage
      }))}
      value={{
        label: languages[context.lang],
        value: context.lang
      }}
      onChange={data => context.setLang(data?.value as AppLanguage)}
    />
  )
}
