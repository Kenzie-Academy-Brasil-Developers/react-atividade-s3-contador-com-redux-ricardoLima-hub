import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

export default function Buttons() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addNumber(1))}>Adicionar</button>
            <button onClick={() => dispatch(subNumber(1))}>Subtrair</button>
        </div>
    )
}
