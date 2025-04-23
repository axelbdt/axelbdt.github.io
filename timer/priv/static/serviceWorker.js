if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((_) => {
        console.log("Service Worker registered");
      })
      .catch((registrationError) => {
        console.error("Service Worker registration failed:", registrationError);
      });
  });
}
