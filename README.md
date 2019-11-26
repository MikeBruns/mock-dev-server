# mock-dev-server  
Don't want to make up your own fun data? Don't have time to create good test names and phony phone numbers?  
> Spin one of these bad boys up. Update the data types. _Bing. Bang. Boom._

Create a rest api that produces sample data using [faker](https://www.npmjs.com/package/faker)

## How to run

```bash
git clone https://github.com/MikeBruns/mock-dev-server.git
npm install
npm run start
```

* Open your browser to http://localhost:8675  
* Here you will find a link to view all the `/orders` data and all the available links defined in [routes.js](https://github.com/MikeBruns/mock-dev-server/blob/master/routes.json)
* Play around with the routes -- notice you can put api infront of `/orders`. Checkout out that [routes.js](https://github.com/MikeBruns/mock-dev-server/blob/master/routes.json) ;)
  * http://localhost:8675/orders
  * http://localhost:8675/api/orders
  * http://localhost:8675/whatever/i/want
  * http://localhost:8675/api/orders/<generated order #>
  * http://localhost:8675/api/orders/department/Grocery
