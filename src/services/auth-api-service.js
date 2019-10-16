const AuthApiService = {
  postLogin(credentials) {
    return fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res => {
        if(!res.ok) {
          return Promise.reject('Something went wrong');
        }
        return res.json();
      })
  },
}

export default AuthApiService;