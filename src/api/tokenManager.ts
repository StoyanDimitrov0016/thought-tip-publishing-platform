import { useAuth } from "@clerk/clerk-react";

const INTERVAL_DURATION_MILL_SEC = 50;
const TIMEOUT_DURATION_MILL_SEC = 500;

const tokenManager = async (): Promise<string | null> => {
  const { getToken: getClerkToken, isLoaded: isTokenLoaded } = useAuth();

  const startTime = Date.now();
  let timeoutReached = false;

  // Try to await the token extraction adequate time based on app responsiveness
  while (!isTokenLoaded && !timeoutReached) {
    // Check if timeout has been reached
    const currentTime = Date.now();
    timeoutReached = currentTime - startTime >= TIMEOUT_DURATION_MILL_SEC;

    // Wait for the next interval by creating an empty (hollow) promise
    if (!timeoutReached) {
      await new Promise((resolve) => setTimeout(resolve, INTERVAL_DURATION_MILL_SEC));
    }
  }

  // Try to retrieve the token, if loaded
  const token = await getClerkToken();
  return token ? `Bearer ${token}` : null;
};

export default tokenManager;
