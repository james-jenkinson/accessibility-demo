import React from 'react'

const onClick = (): void => {
  window.alert('Clicked a button')
}

const Semantics: React.FC = () =>
  <>
    <h1 className='title'>Usage of Semantic html elements</h1>
    <h2 className='subtitle'>Examples of incorrect semantics</h2>
    <p className='block'>
      The following button behaves and is styled as a button,
      however in the <a href='https://en.wikipedia.org/wiki/Document_Object_Model'>DOM</a> the
      element is marked up as a <code>div</code>
    </p>

    <div className='block'>
      <div className='button' onClick={onClick}>Click me!</div>
    </div>

    <p className='block'>
      As is, the button has bad accessibility, as it is
      not reachable via the keyboard using tab, if instead
      the button is correctly marked up using <code>button</code>,
      the element is reachable using tab
    </p>

    <div className='block'>
      <button className='button' onClick={onClick}>Click me!</button>
    </div>

    <h2 className='subtitle'>Examples of correct semantics</h2>
    <h3 className='susbtitle is-3'>Button</h3>
    <p className='block'>
      The button element should be used for all clickable elements on the screen,
      that produce an effect, but do not result in a change to the url the user is
      currently on
    </p>
    <p className='block'>
      This is also true for more complex buttons, comprised of nested elements, for example an image
    </p>
    <div className='block'>
      <button onClick={onClick}>
        <div className='card is-clickable'>
          <div className='card-header'>
            <div className='card-header-title'>This is still a button</div>
          </div>
          <img className='card-image' src='https://picsum.photos/500/300' />
          <div className='card-content'>
            Click me please
          </div>
        </div>
      </button>
    </div>

    <h3 className='subtitle is-3'>Anchor / link</h3>

    <p className='block'>
      The <code>a</code> tag should likewise be used for clickable elements that change the page
      the user is currently on, this is true for both internal routing, routes that take you to
      somewhere else within the current website, and external routing, that takes you to another site
      altogether.
    </p>

    <p className='block'>
      A common mistake is to use the <button>tag</button> for something that is actually a link, simply
      because the link is styled like a button (instead of the traditional blue underlined text). Semantically
      however, this is still an anchor tag.
    </p>

    <a className='block' href='http://www.google.com'>I'm an anchor tag</a>
    <div className='block'>
      <a className='button' href='http://www.google.com'>I'm also an anchor tag</a>
    </div>

    test
  </>

export default Semantics
