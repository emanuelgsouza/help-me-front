import { get } from 'lodash'

/**
 * @method loadValues
 * @param {QuerySnapshoot} QuerySnapshoot Firestore.QuerySnapshoot instance
 */
const loadValues = QuerySnapshoot => {
  const docs = get(QuerySnapshoot, 'docs', []) || []

  return docs.map(doc => doc.data())
}

export default loadValues
