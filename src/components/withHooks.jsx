import { useNavigate } from "react-router-dom";

export default function withHooks(Component) {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        return (<Component navigate={navigate} {...props } />);
    };
    return Wrapper;
};