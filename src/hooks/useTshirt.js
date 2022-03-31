import { useEffect, useState } from "react"

const useTshirt = () => {
    const [tshirts, setTshirs] = useState([])
    useEffect(() => {
        fetch('tshirt.json')
            .then(res => res.json())
            .then(data => setTshirs(data))
    }, [])
    return [tshirts, setTshirs];


}
export default useTshirt;