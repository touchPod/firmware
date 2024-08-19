import { Elysia } from 'elysia';
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia();

const isSetup = async () => {
    return await Bun.file("sd/.setup").exists();
};

app.use(staticPlugin({
    assets: "./ui/css",
    prefix: "/css"
}))
app.use(staticPlugin({
    assets: "./ui/js",
    prefix: "/js"
}))
app.use(staticPlugin({
    assets: "./ui/template",
    prefix: "/template"
}))
app.use(html())
app.get('/', async () => {
    return Bun.file('./ui/index.html')
})
app.get('/issetup', async () => {
    return await isSetup()
})
app.listen(3000);