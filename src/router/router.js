import Buy from "../pages/buy/buy";
import Home from "../pages/home/home";
import Product from "../pages/productDetail/product";
import Cart  from "../pages/cart/cart";
import { BrowserRouter, Route, Switch} from "react-router-dom";

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Ap-Shop" component={Home} exact/>
                <Route path="/Ap-Shop/product/:id" component={Product} />
                <Route path="/Ap-Shop/buy/:id" component={Buy} />
                <Route path="/Ap-Shop/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;