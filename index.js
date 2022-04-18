function submitData(name, email) {
    const data = { name, email };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      };


    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        document.body.append(data.id)
      })
      .catch(error => {
        document.body.append(error.message)
      }) 
}