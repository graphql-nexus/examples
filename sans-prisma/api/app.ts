import { app } from "graphql-santa"

app.addToContext(() => {
  return {
    db: {
      users: {
        newton: {
          id: "1",
          birthyear: "1649",
          name: "Newton"
        }
      }
    }
  }
})
