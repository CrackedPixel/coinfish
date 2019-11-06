import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';



const NoPage = () => {
  return (
    <article className="page__inside">
      <section className="nopage__error__container">
        <h1>404</h1>
        <div className="nopage__error">
          <ErrorOutlineIcon className="errorIcon"/><span>Page not found</span>
        </div>
      </section>
    </article>
  )
}

export default NoPage
