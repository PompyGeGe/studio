// src/firebase/index.ts
import { app } from './config';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { FirebaseProvider, useFirebase, useFirebaseApp, useAuth, useFirestore } from './provider';
import { FirebaseClientProvider } from './client-provider';
import { useCollection } from './firestore/use-collection';
import { useDoc } from './firestore/use-doc';
import { useUser } from './auth/use-user';

const initializeFirebase = async () => {
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  return { app, auth, firestore };
};

export {
  initializeFirebase,
  FirebaseProvider,
  FirebaseClientProvider,
  useCollection,
  useDoc,
  useUser,
  useFirebase,
  useFirebaseApp,
  useAuth,
  useFirestore,
};
