export let pageNumber = () => {
  let currentPage = +localStorage.getItem('page') != null ? +localStorage.getItem('page') : 0
  switch (currentPage) {
    case 1:
      currentPage = 0;
      return currentPage;
    case 2:
      currentPage = 20;
      return currentPage;
    case 3:
      currentPage = 40;
      return currentPage;
    case 4:
      currentPage = 60;
      return currentPage;
    case 5:
      currentPage = 80;
      return currentPage;
  }
}
