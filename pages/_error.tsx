import React from 'react'
import LayOutError from 'src/components/Error'

const Error = ({ statusCode }) => {
  let message = ''
  if (statusCode === 404) {
    message = 'Not Found'
  } else if (statusCode === 500) {
    message = 'Not Found'
  } else {
    message = 'Not Found'
  }
  return (
    <p>
      {statusCode ? (
        <LayOutError statusCode={404} message={message} />
      ) : (
        'An error occurred on client'
      )}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode = ''
  if (res) {
    statusCode = res.statusCode
  } else {
    statusCode = err ? err.statusCode : 404
  }
  return { statusCode }
}

export default Error
