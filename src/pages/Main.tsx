import Navigation from "../components/Navigation/Navigation.tsx";
import MainContainer from "../components/MainContainer/MainContainer.tsx";
import References from "../components/References/References.tsx";
import Objects from "../components/Objects/Objects.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Contacts from "../components/Contacts/Contacts.tsx";
import Footer from "../components/Footer/Footer.tsx";
import ComplitedObjects from "../components/ComplitedObjects/ComplitedObjects.tsx";

const Main = () => {
    return (
        <>
            <Navigation/>
            <MainContainer/>
            <References/>
            <Objects/>
            <ContactForm/>
            <ComplitedObjects/>
            <Contacts/>
            <Footer/>
        </>
    );
};

export default Main;