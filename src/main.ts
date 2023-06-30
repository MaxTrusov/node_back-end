import express, { Request, Response } from 'express'
const app = express()
const port = process.env.PORT || 3000



app.get('/about', (req: Request, res: Response) => {
   res.end(`<div>
         <h1>Stroy-city </h1> 
         
         <p>Home page</p>
         <nav>
            <ul> 
               <li> <a href="/about">Home page</a> </li>
               <li> <a href="/services">Services page</a> </li>
            </ul>
         </nav>
            
      </div>`)
})

app.get('/services', (req: Request, res: Response) => {
   res.end(`<div> 
   <h2>Stroy-city</h2>
   <h3>строительный портал</h3> 
   <p>Services page</p>  
   <nav>
   <ul> 
      <li> <a href="/about">Home page</a> </li>
      <li> <a href="/services">Services page</a> </li>
   </ul>
</nav> </div>`)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${ port }`)
})
