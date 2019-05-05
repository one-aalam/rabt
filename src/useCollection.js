import { useState, useEffect } from 'react';
import { db } from './firebase';

export default function useCollection(path, orderBy, where = []) {
  const [ docs, setDocs ] = useState([]);
  const [ queryField, queryOp, queryVal ] = where;
  useEffect(() => {
    let collection = db.collection(path);

    if (orderBy) {
      collection = collection.orderBy(orderBy);
    }

    if (queryField) {
      collection = collection.where(queryField, queryOp, queryVal);
    }

    return collection
      .onSnapshot(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
          docs.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setDocs(docs);
      })
  }, [ path, orderBy, queryField, queryOp, queryVal ])

  return docs;
}