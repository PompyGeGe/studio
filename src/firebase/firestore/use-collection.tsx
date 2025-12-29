// src/firebase/firestore/use-collection.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  collection,
  query,
  onSnapshot,
  Query,
  DocumentData,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';

export const useCollection = <T extends DocumentData>(
  collectionPath: string
) => {
  const db = useFirestore();
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!db) return;

    const q: Query<T> = query(collection(db, collectionPath)) as Query<T>;

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const documents: T[] = [];
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() } as T);
        });
        setData(documents);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [db, collectionPath]);

  return { data, loading, error };
};
