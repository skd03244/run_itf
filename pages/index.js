import Carousel from "../components/main/banners/Carousel";
import Shortcut from "../components/main/shortcuts/Shortcut";
import ProductList from "../components/main/products/ProductList";
export default function Home() {
    return (
        <div className="break-keep">
            <Carousel />
            <Shortcut />
            <ProductList title="Just Dropped" subTitle="๋ฐ๋งค ์ํ"/>
        </div>
    )
}
