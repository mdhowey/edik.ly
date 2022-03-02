const url = 'http://localhost:8080/api/users'

// *** Verify naming convention of .uid in header

class User {
    // DONE
    static register = (data) => {
        return fetch(`${url}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
          console.log(res);
          return res.json();

          // This was necessary to return body of response promise
          // Doesn't work as intended, just forces a response through
          // return res
        }).catch((error) => console.log(error));
    }
    
    // DONE
    static login = (data) => {
        return fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
          console.log(res);
          return res.json();
        });
    };

    static dashboard = (data) => {
        return fetch(`${url}/dashboard`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());
    };

    // Retrieve all Users
    static allUsers = () => {
      return fetch(`${url}/all`).then(res => res.json());
    }

    // Retrieve single User by ID
    static oneUser = (id) => {
      return fetch(`${url}/${id}`).then(res => res.json())
    }

  // // Update Single User
  // router.put("/:id", users.update);
  static userUpdate = (id, data) => {
    return fetch(`${url}/${id}`, {
      // credentials: "include",
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.uid}`
      },
      // {"content": data} syntax might be different
      body: JSON.stringify({"content": data})
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
  }

  // // delete Single User
  // router.delete("/:id", users.delete);
  static userDelete = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
    })
    .then(res => {
        res.json()
    })
  }

  // // Set articles for user
  // router.put("/:id/setArticle", users.setUserArticle)
  static setArticleForUser = (id, data) => {
    return fetch(`${url}/${id}/setArticle`, {
      // credentials: "include",
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.uid}`
      },
      // {"content": data} syntax might be different
      body: JSON.stringify(data)
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
  }
  // // delete article for user
  // router.delete("/:id/deleteArticle", users.deleteUserArticle)

  static articleUserConnectionDelete = (id, data) => {
    return fetch(`${url}/${id}/deleteArticle`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
  }
  
}
    
export default User;