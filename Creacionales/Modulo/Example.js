const users = (() => {
  const recurso = 'https://jsonplaceholder.typicode.com/users';

  return {
    listar: async () => {
      return await fetch(recurso)
        .then((response) => response.json());
    },
    crear: async (data) => {
      return await fetch(recurso, {
        type: 'POST',
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
    },
  }
})();