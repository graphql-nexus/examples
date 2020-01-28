import { app } from 'nexus-future'

app.app.objectType({
  name: 'Blog',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.posts({
      type: 'CustomPost',
      pagination: false,
      ordering: true,
      filtering: { title: true },
    })
    t.model.viewCount()
    t.model.authors()
  },
})
