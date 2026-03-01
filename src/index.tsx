import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)
app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.render(
    <div id="root"></div>
  )
})

export default app
