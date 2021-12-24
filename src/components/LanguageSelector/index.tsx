import classnames from 'classnames'
import React, { useContext } from 'react'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import config from 'config'
import { languageContext } from '../../contexts/LanguageContext'
import index from '../../utils/indexFunctions'

const options = config.languageOptions.options

const optionsByValue = index(options).byFunction(item => item.value)

interface ItemProps {
  label: string
  value: string
  props: any
}

const Item: React.FC<ItemProps> = (props) => {
  const { setLanguage } = useContext(languageContext)
  return (
    <>
      <button
        className='dropdown-item button-style-none'
        {...props.props}
        onClick={() => setLanguage(props.value)}
      >
        {props.label}
      </button>
    </>
  )
}

const LanguageSelector: React.FC = () => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(options.length)
  const { language } = useContext(languageContext)

  return (
    <>
      <div
        className={classnames('dropdown', { 'is-active': isOpen })}
      >
        <div className='dropdown-trigger'>
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
            {...buttonProps}
          >
            <span>{optionsByValue[language].label}</span>
            <span className='icon is-small'>
              <i className='fas fa-angle-down' aria-hidden='true' />
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            {options.map((option, i) => (
              <Item
                key={option.value}
                props={itemProps[i]}
                label={option.label}
                value={option.value}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LanguageSelector
