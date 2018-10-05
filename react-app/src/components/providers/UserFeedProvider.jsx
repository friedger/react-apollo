import React from 'react'
import { PropTypes } from 'prop-types'
import { getUserFeed, checkinSubscription } from '../../database/queries'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { getUser } from '../../store'

const _UserFeedProvider = ({ limit, user, children }) => {
  return (
    <Query query={getUserFeed} variables={{ limit }}>
      {({ subscribeToMore, loading, error, data: { userFeed } }) => {
        return (
          !loading &&
          children({
            loading,
            error,
            userFeed,
            subscribeToMore: () =>
              subscribeToMore({
                document: checkinSubscription,
                variables: {
                  onlyBeers: false,
                },

                updateQuery: _ => {
                  console.log('hello there')
                },
              }),
          })
        )
      }}
    </Query>
  )
}

export const UserFeedProvider = connect(state => ({
  user: getUser(state),
}))(_UserFeedProvider)

UserFeedProvider.propTypes = {
  limit: PropTypes.number,
}

UserFeedProvider.defaultProps = {
  limit: 18,
}
