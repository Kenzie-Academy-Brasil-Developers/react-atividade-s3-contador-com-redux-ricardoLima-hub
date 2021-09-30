import { useSelector } from "react-redux"

export default function DisplayNumber() {

    const result = useSelector((state) => state.result);

    return (
        <div>
            {result}
        </div>
    )
}
