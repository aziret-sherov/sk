import Navigation from "../components/Navigation/Navigation.tsx";
import MainContainer from "../components/MainContainer/MainContainer.tsx";
import References from "../components/References/References.tsx";
import Objects from "../components/Objects/Objects.tsx";

const Main = () => {
    return (
        <>
            <Navigation/>
            <MainContainer/>
            <References/>
            <Objects/>
        </>
    );
};

export default Main;