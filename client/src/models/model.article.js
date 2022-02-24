const url = 'http://localhost:8080/app/routes/article.routes';

class Article {

    // // Create new article
    // router.post("/", articles.create);
    static createArticle = (data) => {
      return fetch(`${url}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      }).then((res) => res.json());
  }

    // // Search all Articles by original_title
    // router.get("/", articles.findAllBySearch);
    // Look into incorporating query parameters

    // // Search all Articles by User
    // router.get("/byUser/:contributor", articles.findAllByUser);
    
    // // Retrieve all Articles
    // router.get("/all", articles.findAll);
    static allArticles = () => {
      return fetch(`${url}/all`).then((res) => res.json());
    }

    // // Retrieve single Article by ID
    // router.get("/:id", articles.findOne);
    static getArticle = (id) => {
      return fetch(`${url}/${id}`).then((res) => res.json());
    }

    // // Update Single Article
    // router.put("/:id", articles.update);
    static articleUpdate = (id, data) => {
      return fetch(`${url}/${id}`, {
      
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

    // // delete Single Article
    // router.delete("/:id", articles.delete);
    static articleDelete = (id) => {
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

    // // set user for article
    // router.put("/:id/setUser", articles.setArticleUser)
    static setArticleForUser = (id, data) => {
      return fetch(`${url}/${id}/setUser`, {
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

    // // delete user for article
    // router.delete("/:id/deleteUser", articles.deleteArticleUser)
    static userArticleConnectionDelete = (id, data) => {
      return fetch(`${url}/${id}/deleteUser`, {
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
  
export default Article;