import Buy from "../pages/buy/buy";
import Home from "../pages/home/home";
import Product from "../pages/productDetail/product";
import Cart  from "../pages/cart/cart";
import { BrowserRouter, Route, Switch} from "react-router-dom";

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/ap-shop" component={Home} exact/>
                <Route path="/ap-shop/product/:id" component={Product} />
                <Route path="/ap-shop/buy/:id" component={Buy} />
                <Route path="/ap-shop/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;