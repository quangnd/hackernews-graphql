# Demo in playground
Run `node index.js` then play around `http://localhost:4000/`

1. Feed
```
{
  feed {
    id,
    description,
    url
  }
}
```

2. Get link by id
```
{
  link(id:"link-3"){
    id,
    description
  }
}
```

3. Create new link
```
mutation {
  post(
    description: "link xyz",
    url:"http://vnexpress.net"
  ) {
    id
  }
}
```

4. Update a link
```
mutation{
  updateLink(
    id: "link-0",
    description: "Quang",
    url: "vnexpress"
  ) {
    id,
    description
  }
}
```

5. Delete a link
```
mutation{
  deleteLink(
    id: "link-0"
  ) {
    id,
    description
  }
}
```
