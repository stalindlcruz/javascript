const addingCookieResolved = (name, value, expirationDays = 1) => {

    if (!name && !value ) {
        console.log('No pueden haber campos vacio!');
        return;
    }

    let cookieExist = false;

    const cookieListSplited = document.cookie.split(';');
    
    cookieListSplited.forEach((cookie) => {
        const cookieWithoutSpace = cookie.trim();
        const [cookieName, cookieValue] = cookieWithoutSpace.split('=')
        
        if (cookieName === name && cookieValue === value) {
            cookieExist = true
            return;
        }
    })
    
    if (!cookieExist) {

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + expirationDays);
        const converToUTCDate = currentDate.toUTCString();
        document.cookie = `${name}=${value}; expires=${converToUTCDate}; path=/`;

        console.log('Cookie creada exitosamente');
        
        return;
    }
    
    console.error('Ya existe una cookie como esta!');
}

const addingCookieResolved2 = (name, value, expirationDays = 1) => {
    if (!name && !value) {
      console.warn("No pueden haber campos vacio!");
      return;
    }
  
    const cookieListSplited = document.cookie.split(";");
  
    let listWithoutSpace = cookieListSplited.map((cookieToSplit) => {
      const cookieWithoutSpace = cookieToSplit.trim();
      const cookieSpliter = cookieWithoutSpace.split("=");
      return cookieSpliter;
    });
  
    let existInList = listWithoutSpace.filter((cookie) => {
      const [cookieName] = cookie;
      if (cookieName === name) {
        return cookie;
      }
    });
  
    if (!existInList.length) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + expirationDays);
      const converToUTCDate = currentDate.toUTCString();
      document.cookie = `${name}=${value}; expires=${converToUTCDate}; path=/`;
  
      console.log("Cookie creada exitosamente");
  
      return;
    }
  
    console.error("Ya existe una cookie como esta!");
};