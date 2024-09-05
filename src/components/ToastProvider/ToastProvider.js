import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const id = crypto.randomUUID();
    setToasts([
      ...toasts,
      {
        id,
        message,
        variant,
      },
    ]);
  }

  function deleteToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const contextValue = {
    toasts,
    setToasts,
    addToast,
    deleteToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
