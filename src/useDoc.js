import { useState, useEffect } from 'react';
import { db } from './firebase';

export default function useDoc(path) {
  const [ doc, setDoc ] = useState(path);

  useEffect(() => {
    db.doc(path).onSnapshot(doc => {
        setDoc({
          id: doc.id,
          ...doc.data()
        });
    });
  }, [path])

  return doc;
}