import { createContext, useEffect, useState } from 'react';
import { subscribeToAuthChanges, getUserProfile } from '../services/authService';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        setUser(firebaseUser);
        const userProfile = await getUserProfile(firebaseUser.uid);
        setProfile(userProfile);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    profile,
    role: profile?.role || null,
    isAdmin: profile?.role === 'admin',
    isAuthenticated: !!user,
    loading,
    refreshProfile: async () => {
      if (user) setProfile(await getUserProfile(user.uid));
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
