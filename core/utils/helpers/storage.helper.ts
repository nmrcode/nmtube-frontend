export const saveTokenToStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeTokensFromStorage = () => {
  localStorage.removeItem("accessToken");
};
