import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

const onClick = (): void => {
  window.alert('Clicked a button')
}

const Semantics: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1 className='title'>{t('Usage of Semantic html elements')}</h1>
      <h2 className='subtitle'>{t('Examples of incorrect semantics')}</h2>
      <p className='block'>
        <Trans i18nKey='incorrect button example'>
          The following button behaves...
          in the <a href='https://en.wikipedia.org/wiki/Document_Object_Model'>DOM</a>...
          marked up as a <code>div</code>...
        </Trans>
      </p>

      <div className='block'>
        <div className='button' onClick={onClick}>{t('Click me!')}</div>
      </div>

      <p className='block'>
        <Trans i18nKey='incorrect button accessibility'>
          As is, the button has bad accessibility...
          if correctly marked up using <code>button</code>...
        </Trans>
      </p>

      <div className='block'>
        <button className='button' onClick={onClick}>{t('Click me!')}</button>
      </div>

      <h2 className='subtitle'>{t('Examples of correct semantics')}</h2>
      <h3 className='susbtitle is-3'>{t('Button')}</h3>
      <p className='block'>
        <Trans i18nKey='correct button usage'>
          The button element should be used for...
          but does not change the url...
        </Trans>
      </p>
      <p className='block'>
        <Trans i18nKey='complex button usage'>
          This is also true for more complex buttons...
        </Trans>
      </p>
      <div className='block'>
        <button onClick={onClick}>
          <div className='card is-clickable'>
            <div className='card-header'>
              <div className='card-header-title'>{t('This is still a button')}</div>
            </div>
            <img className='card-image' src='https://picsum.photos/500/300' />
            <div className='card-content'>
              {t('Click me please')}
            </div>
          </div>
        </button>
      </div>

      <h3 className='subtitle is-3'>{t('Anchor / link')}</h3>

      <p className='block'>
        <Trans i18nKey='correct a tag usage'>
          The <code>a</code> tag should used...
        </Trans>
      </p>

      <p className='block'>
        <Trans i18nKey='incorrect a tag usage'>
          A common mistake is to use the <code>button</code> tag...
        </Trans>
      </p>

      <a className='block' href='http://www.google.com'>{t('I\'m an anchor tag')}</a>
      <div className='block'>
        <a className='button' href='http://www.google.com'>{t('I\'m also an anchor tag')}</a>
      </div>
    </>
  )
}

export default Semantics
